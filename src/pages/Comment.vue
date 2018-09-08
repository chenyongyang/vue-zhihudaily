<template>
  <div class="comment">
    <div class="header">
      <div class="left">
        <img class="back" src="@/assets/img/back.png" alt="" @click="back">
        <span class="title">{{storyExtra.comments}}条点评</span>
      </div>
      <div class="right">
        <img class="write" src="@/assets/img/write.png" alt="">
      </div>
    </div>
    <div class="long-comment">
      <div class="top">
        <span>{{storyExtra.long_comments}}条长评</span>
      </div>
      <comment-item v-if="comment" class="comment-item" v-for="(comment, index) in longComments.comments" :key="index" :comment="comment"></comment-item>
    </div>
    <div class="short-comment">
      <div class="top">
        <span>{{storyExtra.short_comments}}条短评</span>
      </div>
      <comment-item v-if="comment" class="comment-item" v-for="(comment, index) in shortComments.comments" :key="index" :comment="comment"></comment-item>
    </div>
  </div>
</template>
 <script>
import axios from 'axios'
export default {
  data () {
    return {
      storyExtra: {},
      longComments: {},
      shortComments: {}
    }
  },
  computed: {
    storyId () {
      return this.$route.params.id
    }
  },
  components:{
    CommentItem: () => import('@/components/CommentItem')
  },
  created() {
    this.getStoryExtra(this.storyId)
    this.getLongComments(this.storyId)
    this.getShortComments(this.storyId)
  },
  methods: {
    back(){
      this.$router.go(-1);
    },
    getStoryExtra (id) {
      return axios.get(`/api/4/story-extra/${id}`).then((res) => {
        if (res.status === 200) {
          this.storyExtra = res.data
        }
      })
    },
    getLongComments (id) {
      return axios.get(`/api/4/story/${id}/long-comments`).then((res) => {
        if (res.status === 200) {
          this.longComments = res.data
          console.log(this.longComments)
        }
      })
    },
    getShortComments (id) {
      return axios.get(`/api/4/story/${this.storyId}/short-comments`).then((res) => {
        if (res.status === 200) {
          this.shortComments = res.data
          console.log(this.shortComments)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.comment {
  height: 100%;
  padding-top: 110px;
  .header {
    width: 100%;
    height: 112px;
    box-sizing: border-box;
    background: #00a2ed;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    font-size: 40px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    img {
      width: 50px;
    }
    .back {
      margin-right: 60px;
    }
    .write {
      width: 60px;
    }
  }
  .long-comment, .short-comment {
    .top {
      height: 100px;
      font-size: 30px;
      line-height: 30px;
      padding-left: 30px;
      display: flex;
      align-items: center;
      border-top: 2px solid #dcdcdc;
    }
    .comment-item {
      border-top: 2px solid #dcdcdc;
    }
  }
}
</style>