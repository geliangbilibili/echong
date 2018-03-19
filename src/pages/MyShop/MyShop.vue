<template>
  <div class="login">
    <div class="header">
      <div class="bg"><img src="./login-bg.png"></div>
      <div class="to-register">
        <i class="iconfont icon-jiantou"></i>
        <span>注册</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    mounted(){
      console.log(this.$router,this.$route)

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .login
    .header
      height 178px
      background-size 100%
      .to-register
        height 50px
        line-height 50px
        padding-left 10px
        .iconfont
          font-size 18px
        span
          float right
          margin-right 10px


</style>
