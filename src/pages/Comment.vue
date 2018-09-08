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
        }
      })
    },
    getShortComments (id) {
      return axios.get(`/api/4/story/${this.storyId}/short-comments`).then((res) => {
        if (res.status === 200) {
          this.shortComments = res.data
        }
      })
    }
  }
}
</script>
 <style lang="scss" scoped>
.comment {
  height: 100%;
  .header {
    height: 112px;
    background: #00a2ed;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    font-size: 40px;
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
  .long-comment {
    .top {
      height: 100px;
      font-size: 30px;
      line-height: 30px;
      padding-left: 30px;
      display: flex;
      align-items: center;
    }
  }
}
</style>