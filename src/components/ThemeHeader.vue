<template>
  <div class="header">
    <div class="left">
        <img class="back" src="@/assets/img/back.png" alt="" @click="back">
        <span>{{ themeName }}</span>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        themeName: String
    },
    methods: {
        back(){
            this.$router.go(-1);
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
  font-size: 40px;
  img {
    width: 40px;
    height: 40px;
  }
  .left{
    display: flex;
    align-items: center;
    .back {
        margin: 0 70px 0 40px;
    }
	}
}
</style>