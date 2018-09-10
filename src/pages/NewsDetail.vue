<template>
  <div class="news-detail">
    <link rel="stylesheet" :href="story.css">
		<!-- :href绑定数组时，会自动取出数组所有的值，不用添加索引 -->
		<detail-header :story-id="story.id" v-if="completed"></detail-header>
    <!-- 这里的v-if就是为了确保父组件异步取值操作完成之后，再渲染子组件，也可以v-if="story.id" -->
    <div class="container">
      <div class="top" v-if="story.image">
        <img class="img" :src="image403(story.image)" alt="">
        <div class="mask"></div>
        <span class="title">{{story.title}}</span>
        <span class="image-source">{{story.image_source}}</span>
      </div>
      <div class="body" v-html="image403(story.body)"></div>
			<!-- v-html的用法在这里体现了 -->
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import image403 from '@/utils/image403'
export default {
	created() {
    this.getNews();
	},
  data() {
    return {
			story: {},
			completed: false
    }
	},
	components:{
		DetailHeader: () => import('@/components/DetailHeader')
	},
  methods: {
    image403,
    getNews () {
      return axios.get(`/api/4/news/${this.$route.params.id}`).then(res => {
        if (res.status === 200) {
					this.story = res.data;
					this.completed = true;
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.news-detail {
  height: 100%;
  overflow: auto;
  .container {
    position: relative;
    .top {
      width: 100%;
      height: 420px;
      position: absolute;
      overflow: hidden;
      color: #fff;
      .img {
        width: 100%;
        height: auto;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
      .mask {
        width: 100%;
        height: 420px;
        position: absolute;
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
      }
      .title {
        position: absolute;
        left: 0;
        bottom: 50px;
        padding: 0 20px;
        line-height: 60px;
      }
      .image-source {
        position: absolute;
        right: 40px;
        bottom: 15px;
        font-size: 24px;
        opacity: 0.7;
      }
		}
  }
}
</style>