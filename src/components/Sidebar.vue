<template>
  <div class="sidebar" @click.stop.prevent>
    <!-- 将侧边栏和遮罩层的点击事件分隔开 -->
    <div class="header">
			<div class="user">
				<img class="avatar" :src="image403('http://pic1.zhimg.com/da8e974dc_m.jpg')" alt="">
				<span class="name">请登录</span>
			</div>
			<div class="content">
				<div class="item" v-for="(item, index) in items" :key="index">
					<img :src="item.img" alt="">
					<span>{{item.title}}</span>
				</div>
    	</div>
    </div>
		<div class="home-page">
			<img src="@/assets/img/homePage.png" alt="">
			<span>首页</span>
    </div>
	  <div class="themes" v-for="(theme, index) in themes" :key="index" @click="toThemePage(theme.id)">
      <span>{{theme.name}}</span>
      <img src="@/assets/img/plus.png" alt="">
    </div>
  </div>
</template>
<script>
import starImg from '@/assets/img/star.png'
import downloadImg from '@/assets/img/download.png'
import image403 from '@/utils/image403'
// 要区分图片或字体资源在模板和js中的使用方式
// 模板中可以使用相对路径；js中要以模块的形式导入才能使用
import { mapActions,mapState } from 'vuex'
export default {
  data () {
    return {
      items: [
        {
          title: '我的收藏',
          img: starImg
        },
        {
          title: '离线下载',
          img: downloadImg
        }
      ]
    }
	},
	created(){
    this.getThemes();
	},
	computed: {
		...mapState(['themes'])
	},
	methods: {
    image403,
    ...mapActions(['getThemes']),
    toThemePage(themeid){
      this.$router.push({
        name: 'ThemeContent',
        params: {
          themeid
        }
      });
    }
	}
}
</script>
 <style lang="scss" scoped>
 .sidebar {
  background: #fff;
  width: 634px;
  height: 100%;
  font-size: 34px;
	overflow: scroll;
  .header {
    height: 228px;
    background: #00a2ed;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .user {
      height: 110px;
      display: flex;
      align-items: center;
      padding-left: 30px;
      .avatar {
        height: 70px;
        width: 70px;
        border-radius: 50%;
        margin-right: 26px;
      }
    }
    .content {
      height: 110px;
      display: flex;
      align-items: center;
      padding-left: 50px;
      .item {
        &:last-of-type {
          margin-left: 80px;
        }
        img {
          width: 32px;
          height: 32px;
          margin-right: 40px;
        }
        span {
          font-weight: bold;
        }
      }
    }
  }
	.home-page {
    height: 103px;
    padding-left: 45px;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
      margin-right: 33px;
    }
    span {
      color: #00a2ed;
    }
  }
	.themes {
    height: 104px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 112px 0 39px;
    img {
      width: 28px;
      height: 28px;
    }
  }
}
</style>