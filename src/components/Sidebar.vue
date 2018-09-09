<template>
  <div class="sidebar" @click.stop.prevent>
    <!-- 将侧边栏和遮罩层的点击事件分隔开 -->
    <div class="header">
		<div>
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
    width: 600px;
    height: 100%;
    .header {
        height: 200px;
        background: #00a2ed;
		font-size: 36px;
    }
	.content{
		.item{
			width: 100%;
			background: #eee;
			border: 1px solid blue;
		}
	}
}
</style>