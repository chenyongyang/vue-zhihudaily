<template>
  <div class="comment-item">
    <div class="avatar">
      <img :src="image403(comment.avatar)" alt="">
    </div>
    <div class="main">
      <div class="author">{{comment.author}}</div>
      <div class="content">{{comment.content}}</div>
      <!-- <div class="reply" v-if="comment.reply_to">
        <span class="reply-author">{{comment.reply_to.author}}:</span>
        {{comment.reply_to.content}}
      </div> -->
      <div class="time">{{ comment.time | formatTime }}</div>
    </div>
    <div class="thumb-up">
      <img src="@/assets/img/thumb_up_gray.png" alt="">
      <span>{{ comment.likes }}</span>
    </div>
  </div>
</template>

<script>
import image403 from '@/utils/image403'
import moment from 'moment'
export default {
  props: {
    comment: Object
  },
  filters: {
    formatTime (time) {
      return moment(time).format('MM-DD HH:mm');
    }
  },
  methods: {
    image403
  }
}
</script>

<style lang="scss" scoped>
.comment-item {
  display: flex;
  padding: 30px 60px 30px 30px;
  font-size: 40px;
  line-height: 55px;
  position: relative;
  .avatar {
    width: 74px;
    margin-right: 10px;
    img {
      width: 74px;
      height: 74rpx;
      border-radius: 50%;
    }
  }
  .main {
    flex-grow: 1;	
    width: 1px;
    .author {
      font-weight: bold;
      margin-bottom: 20px;
    }
    // .reply {
    //   overflow: hidden;
    //   white-space: nowrap;
    //   text-overflow: ellipsis;
    //   .reply-author {
    //     font-weight: bold;
    //   }
    // }
    .time {
      font-size: 30px;
      color: #afafaf;
      margin-top: 40px;
    }
  }
  .thumb-up {
    position: absolute;
    right: 30px;
    top: 34px;
    font-size: 30px;
    line-height: 30px;
    color: #b8b8b8;
    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>