<template>
  <div class="home-page">
    <div ref="wrapper" class="wrapper">
      <div>
        <Header @toggle-menu="toggleMenu"></Header>
        <Swiper></Swiper>
        <div class="today-hot">
          <h3 class="title">今日要闻</h3>
          <news-item class="item" v-for="(story, index) in todayHotStories" :key="index" :story="story"></news-item>
        </div>
        <div class="news-before" v-for="(item, outIndex) in beforeStories" :key="outIndex">
          <h3 class="title">{{dateFormat(item.date)}}</h3>
          <news-item class="item" v-for="(story, innerIndx) in item.stories" :key="innerIndx" :story="story"></news-item>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="mask" v-show="isSidebarShow" @click="toggleMenu">
        <transition name="slide">
          <Sidebar class="sidebar" v-show="isSidebarShow"></Sidebar>
        </transition>
      </div>
    </transition>

  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import betterScroll from 'better-scroll'
import moment from 'moment'

export default {
  created(){
    this.loadData(); // 钩子函数内不要包含太多的业务逻辑，尽可能封装成方法
  },
  data(){
    return {
      isSidebarShow: false
    }
  },
  computed:{
    ...mapState(['todayHotStories','beforeStories'])
  },
  components: {
    Header: () => import("@/components/Header"),
    Swiper: () => import("@/components/Swiper"),
    NewsItem: () => import('@/components/NewsItem'),
    Sidebar: () => import('@/components/Sidebar')
  },
  methods:{
    toggleMenu(){
      this.isSidebarShow = !this.isSidebarShow;
    },
    ...mapActions(['getNewsLatest', 'getBefore']),
    ...mapMutations(['CLEARSTORIES']),
    dateFormat(date){
        let day = ''
        switch (moment(date).format('e')) {
          case '0':
            day = '日';
            break;
          case '1':
            day = '一';
            break;
          case '2':
            day = '二';
            break;
          case '3':
            day = '三';
            break;
          case '4':
            day = '四';
            break;
          case '5':
            day = '五';
            break;
          case '6':
            day = '六';
            break;
          default:
            break;
        }
        return moment(date).format('MM月DD日') + ' 星期' + day;
      },
    loadData () {
      if (!this.scroll) {
        this.getNewsLatest().then(res => {

          this.$nextTick(() => {

            this.scroll = new betterScroll(this.$refs.wrapper, {
              click: true
            });

            this.scroll.on('scrollEnd', (pos) => {
              if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                this.getBefore().then(res => {
                  this.$nextTick(() => {
                    this.scroll.refresh()
                  });
                });
              }
            });

            this.scroll.on('touchEnd', (pos) => {
              if (pos.y > 30) {
                this.CLEARSTORIES();
                this.getNewsLatest().then(() => {
                  this.$nextTick(() => {
                    this.scroll.refresh()
                  })
                })
              }
            });

          });
        })
      } 
      // else 
      // {
      //   console.log(1)
      //   this.getBefore().then(res => {
      //     this.$nextTick(() => {
      //       this.scroll.refresh();
      //     })
      //   })
      // }
    }
  }
};
</script>
<style lang="scss" scoped>
.home-page {
  height: 100%;
  background: #f3f3f3;
  overflow: scroll;
  .wrapper {
    height: 100%;
  }
  .today-hot, .news-before{
    padding-top: 35px;
    .title {
      font-size: 28px;
      font-weight: normal;
      color: #4d4d4d;
      line-height: 28px;
      margin: 0 0 44px 34px;
    }
    .item {
      margin: 0 auto 17px;
    }
  }
  .mask {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    .sidebar {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 0.5s;
  }
  .fade-enter, .fade-leave-to {
    background: rgba(0, 0, 0, 0);
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 0.5s;
  }
  .slide-enter, .slide-leave-to {
    transform: translateX(-100%);
  }
}
</style>
