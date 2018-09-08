<template>
  <div class="header">
    <div class="left">
      <img class="back" src="@/assets/img/back.png" alt="" @click="back">
    </div>
    <div class="right">
      <img class="item" src="@/assets/img/share.png" alt="" @click="share">
      <img class="item" src="@/assets/img/star.png" alt="" @click="star">
      <div class="comment item">
        <img src="@/assets/img/comment.png" alt="" @click="comment">
        <span class="number">{{storyExtra.comments | toK}}</span>
      </div>
      <div class="thumb-up item">
        <img src="@/assets/img/thumb_up.png" alt="">
        <span class="number">{{storyExtra.popularity | toK}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            storyExtra: {}
        }
    },
    props: {
        storyId: Number
    },
    filters:{
        toK(number){
            if (number >= 1000) {
                return (number / 1000).toFixed(1) + 'k'
            } else {
                return number
            }
        }
    },
    created() {
        this.getStoryExtra();
    },
    methods: {
        back(){
            this.$router.go(-1);
        },
        share(){
            console.log('分享成功')
        },
        star(){
            console.log('点赞成功')
        },
        comment(){
            this.$router.push({
                name: 'Comment',
                params: {
                    id: this.storyId
                }
            });
        },
        getStoryExtra() {
            // 这里用路由的参数代替了id成功了，但是为什么不能用属性id呢？
            // 1.首先子组件定义created阶段，父组件已经调用过了created阶段，这时，proper属性，data属性，method属性已初始化完成。
            // 2.父子组件的初始化周期，从创建到挂载，是从外到内，再从内到外，且mixins的钩子函数总是在当前组件之前执行。
            // 所以，父组件异步传值，子组件mounted阶段，也不一定能取得值。
            // 因此，建议确定父组件异步获取值之后，再渲染子组件
            return axios.get(`/api/4/story-extra/${this.storyId}`).then((res) => {
                if (res.status === 200) {
                    this.storyExtra = res.data
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.header {
  height: 112px;
  background: #00a2ed;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  img {
    width: 50px;
  }
  .right {
    display: flex;
    align-items: center;
    .item {
      margin-right: 50px;
      &:last-child {
        margin-right: 0;
      }
      .number{
        font-size: 30px;
      }
    }
  }
}
</style>