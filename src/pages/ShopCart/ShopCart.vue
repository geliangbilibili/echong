<template>
<div class="cart">
  <!--头部-->
  <div class="header">
    <i class="iconfont icon-jiantou jiantou" @click="$router.back()"></i>
    购物车
    <i class="iconfont icon-fenlei1 fenlei1" @click="coming"></i>
  </div>
  <!--fenlei内部-->
  <transition name="lucky">
    <div class="show-list" v-if="delate">
      <div class="nav-item">
        <i class="iconfont icon-shouye1"></i>
        <p class="text">首页</p>
      </div>
      <div class="nav-item">
        <i class="iconfont icon-fenlei2"></i>
        <p class="text">商品分类</p>
      </div>
      <div class="nav-item">
        <i class="iconfont icon-gouwuche"></i>
        <em class="lala">0</em>
        <p class="text">购物车</p>
      </div>
      <div class="nav-item">
        <i class="iconfont icon-chongwu"></i>
        <p class="text">我的e宠</p>
      </div>
    </div>
  </transition>

  <!--大图部分-->
  <div class="content">
    <div class="cartfont">
      <i class="iconfont icon-gouwuche"></i>
      <p class="msg">购物车是空的</p>
    </div>
    <div class="link-tab">
      <button class="goshopping">
        去逛逛
      </button>
      <button class="save">
        我的收藏
      </button>
    </div>
  </div>
</div>
</template>
<script>
  export default{
    name:"ShopCart",
    data(){
      return{
        delate:false
      }
    },
    methods:{
      coming(){
        this.delate = !this.delate
      },
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cart
    background: #fff;
    .header
      text-align center
      height 50px
      line-height 50px
      font-size 18px
      border-bottom 1px solid #D8D8D8
      header #888
      .jiantou
        float left
        color #bbb
        margin-left 15px
        font-size 18px
      .fenlei1
        float right
        margin-right 15px
        font-size 20px
        color grey

    .show-list
      margin 10px 0
      display flex
      height 60px
      overflow hidden
      box-sizing border-box
      border-bottom 1px solid #D8D8D8
      .nav-item
        flex 1
        text-align center
        .iconfont
          font-size 25px
          color #ABABAB
        .text
          font-size 14px
        .lala
          position relative
          bottom 5px
          left 5px
          display inline-block
          color #fff
          font-size 8px
          border-radius 30px
          width 18px
          height 18px
          background: red

      &.lucky-enter-active,&.lucky-leave-active
        transition height 0.5s
      &.lucky-enter,&.lucky-leave-to
        height 0

    .content
      text-align center
      .cartfont
        margin-top 40px
        .iconfont
          font-size 105px
          color #ccc
        .msg
          font-size 17px
          color #bbb
          margin 20px 0 20px 10px
      .link-tab
        button
          margin-bottom 40px
          width 100px
          height 40px
          border-radius 5px
          background transparent
          border 1px solid #888
          color #aaa
          font-size 16px
</style>
