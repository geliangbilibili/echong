<template>
  <div class="classify">
    <header class="classify-header">
      <div class="tabs">
        <router-link tag="span"  to="/classaify/class">
          分类
        </router-link>
        <router-link tag="span"  to="/classaify/brand">
          品牌
        </router-link>
      </div>
      <div class="search">
        <i class="iconfont icon-sousuo1"></i>
      </div>
    </header>
    <div class="classify-content">
      <keep-alive>
        <router-view/>
      </keep-alive>

    </div>

  </div>
</template>
<script>
  export default{
    name:"classaify",
    data(){
      return {
        on:true,
      }
    },
    methods:{
      toggleOn(b){
        this.on = b
      }
    },
    mounted(){

    },
    components:{
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"'/classaify'
  #app
    height 100%
  .classify
    height 100%
    box-sizing border-box
    padding 0 0 50px 0
    background: #fff;
    .classify-header
      text-align center
      height 40px
      line-height 40px
      position relative
      border-bottom 2px solid #D8D8D8
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
        .iconfont
          color #bbb
          font-size 20px
      .category-content
        height calc(100% - 40px)
    .classify-content
      height 100%
</style>
