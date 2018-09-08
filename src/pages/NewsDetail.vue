<template>
  <div class="news-detail">
    <link rel="stylesheet" :href="story.css[0]">
    <div class="my-body" v-html="image403(story.body)"></div>
    <!-- v-html的用法在这里体现了 -->
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
      story: null
    }
  },
  methods: {
    image403,
    getNews () {
      return axios.get(`/api/4/news/${this.$route.params.id}`).then(res => {
        if (res.status === 200) {
					this.story = res.data;
					console.log(res.data.css[0])
        }
      })
    }
  }
}
</script>
<style>
</style>