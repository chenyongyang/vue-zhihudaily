<template>
    <div class="theme-page">
        <ThemeHeader class="header" :themeName="themeContent.name"></ThemeHeader>
        <div class="top">
            <img class="bg-img" :src="image403(themeContent.background)" alt="">
            <span class="des">{{themeContent.description}}</span>
        </div>
        <div class="editors">
            <span class="editBy">主编</span>
            <img class="editor-avatar" :src="image403(editor.avatar)" alt="" v-for="(editor, index) in themeContent.editors" :key="index">
        </div>
        <news-item class="item" v-for="(story, innerIndx) in themeContent.stories" :key="innerIndx" :story="story" @click-to="toNewsDetail(story.id)"></news-item>
    </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'
import image403 from '@/utils/image403'
import NewsItem from '@/components/NewsItem'
import ThemeHeader from '@/components/ThemeHeader'
import Sidebar from '@/components/Sidebar'
export default {
    created(){
        this.getThemeContent(this.$route.params.id);
    },
    computed:{
        ...mapState(['themeContent'])
    },
    methods: {
        image403,
        ...mapActions(['getThemeContent'])
    },
    components: {
        NewsItem,ThemeHeader,Sidebar
    }
}
</script>

<style lang="scss" scoped>
.theme-page {
    .header{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 1;
    }
    .top {
      height: 470px;
      position: relative;
      overflow: hidden;
      background: #4d4d4d;
      .bg-img {
        width: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .des {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 55px;
        color: #fffffc;
        padding: 0 34px;
        font-size: 36px;
        line-height: 44px;
      }
    }
    .editors {
      height: 108px;
      display: flex;
      align-items: center;
      padding: 0 30px;
      font-size: 28px;
      font-weight: normal;
      color: #4d4d4d;
      .editBy {
        margin-right: 34px;
      }
      .editor-avatar {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        margin-right: 24px;
      }
    }
    .item {
      margin: 0 auto 17px;
    }
  }
</style>
