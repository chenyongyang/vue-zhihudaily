<template>
  <div class="sidebar" @click.stop.prevent>
    <!-- 将侧边栏和遮罩层的点击事件分隔开 -->
    <div class="header">
		<div class="user">
			<img class="avatar" src="@/assets/img/default_avatar.png" alt="">
			<span class="name">请登录</span>
		</div>
    </div>
	<div class="content">
        <div class="item" v-for="(item, index) in items" :key="index">
			<img :src="item.img" alt="">
			<span>{{item.title}}</span>
        </div>
    </div>
  </div>
</template>
<script>
import starImg from '@/assets/img/star.png'
import downloadImg from '@/assets/img/download.png'
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
  }
}
</script>
<style lang="scss" scoped>
.sidebar {
  background: #fff;
  width: 634px;
  height: 100%;
  font-size: 34px;
  .header {
    height: 150px;
    background: #00a2ed;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
	}
	.content {
		.item {
			height: 100px;
			width: 100%;
			margin-bottom: 10px;
			background: #eee;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			img {
				width: 40px;
				margin-right: 40px;
			}
			span {
				font-weight: bold;
				font-size: 36px;
			}
		}
	}
}
</style>