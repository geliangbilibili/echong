<template>
  <footer class="footer_guide border-1px">
    <div class="guide_item " @click="goto('/homepage')" :class="{on: $route.path=='/homepage'}">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guide_item" @click="goto('/classaify')" :class="{on: $route.path=='/classaify'}">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </div>
    <div class="guide_item" @click="goto('/shopcart')" :class="{on: $route.path=='/shopcart'}">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </div>
    <div class="guide_item" @click="goto('/myshop')" :class="{on: $route.path=='/myshop'}">
      <span class="item_icon">
        <i class="iconfont icon-biaoqing"></i>
      </span>
      <span>我的E宠</span>
    </div>
  </footer>
</template>
<script>
  export default{
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 45px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #84BE78
      span
        font-size 10px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 18px

</style>
