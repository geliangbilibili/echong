<template>
  <div class="classify">
    <header class="classify-header">
      <div class="tabs">
        <router-link tag="span" to="/Classaify/class">
          分类
        </router-link>
        <router-link tag="span" to="/Classaify/brand">
          品牌
        </router-link>
      </div>
      <div class="search">
        <i class="iconfont icon-sousuo1"></i>
      </div>
    </header>
    <div class="classify-content">
      <router-view/>
    </div>

  </div>
</template>
<script>
  export default{
    name:"classaify",
    components:{
      mounted(){

      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .classify
    height 100%
    .classify-header
      text-align center
      height 40px
      line-height 40px
      position relative
      border-bottom 1px solid #aaa
      .tabs
        height 100%
        text-align center
        span
          font-size 13px
          padding 0 8px
          margin 0 8px
          padding-bottom 11px
        span.router-link-active
          color red
          font-weight 800
          border-bottom 1px solid red
      .search
          position absolute
          right 15px
          top 2px
      .category-content
        height calc(100% - 40px)


</style>
