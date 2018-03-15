<template>
  <div class="wrapper">
    <!--头部-->
    <div class="all-header">
      <!--广告-->
      <div class="adv"></div>
      <!--下部分-->
      <header class="home-header">
        <!--搜索-->
        <div class="header-top">
          <div class="pet-city">
            <span>狗狗</span>
            <span>|</span>
            <span>重庆</span>
          </div>
          <div class="pet-search">
            <input type="text" placeholder="搜索商品和品牌">
            <i class="pet-btn iconfont icon-sousuo"></i>
          </div>
          <div class="tip-talk">
            <i class="iconfont icon-pinglun"></i>
          </div>
        </div>
        <!--导航-->
        <div class="pet-tabs">
          <div class="tab-item"><span class="text-current">首页</span></div>
          <div class="tab-item"><span class="text">狗狗主粮</span></div>
          <div class="tab-item"><span class="text">服饰城</span></div>
          <div class="tab-item"><span class="text">医疗保健</span></div>
          <div class="tab-item"><span class="text">零食玩具</span></div>
          <!--<div class="tab-item"><span class="text">日出外用</span></div>
          <div class="tab-item"><span class="text">美容香波</span></div>-->
        </div>
      </header>
    </div>
    <!--中间部位-->
    <div class="content">
      <!--轮播图1-->
      <div class="next-content swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./images/slider1.jpg">
          </div>
          <div class="swiper-slide">
            <img src="./images/slider2.jpg">
          </div>
          <div class="swiper-slide">
            <img src="./images/slider3.jpg">
          </div>
          <div class="swiper-slide">
            <img src="./images/slider4.jpg">
          </div>
          <div class="swiper-slide">
            <img src="./images/slider5.jpg">
          </div>
          <div class="swiper-slide">
            <img src="./images/slider-7.jpg">
          </div>
        </div>
        <!--swiper插件使用 小圆点-->
        <div class="swiper-pagination"></div>
      </div>
      <!--大图1-->
      <div class="big-dog">
        <img src="./images/dog.jpg" style="width: 100%">
      </div>
      <!--导航栏-->
      <div class="good-list">
        <ul class="good-list-wrapper">
          <li><img src="./images/ect.jpg"></li>
          <li><img src="./images/pptm.jpg" ></li>
          <li><img src="./images/Ecgj.jpg"></li>
          <li><img src="./images/cpys.jpg"></li>
          <li><img src="./images/qctj.jpg"></li>
          <li><img src="./images/xwkt.jpg"></li>
          <li><img src="./images/mzlm.jpg"></li>
          <li><img src="./images/cpsp.jpg"></li>
          <li><img src="./images/mcs.jpg"></li>
          <li><img src="./images/xjc.jpg"></li>
        </ul>
      </div>
      <!--秒杀图-->
      <div class="miaosha">
        <img src="./images/miaoshaa.jpg">
      </div>
      <!--每日疯抢栏-->
      <div class="surprise">
        <div class="surprise-header">
          <div class="img">
            <img src="./images/fengqiang.png">
          </div>
          <div class="time">
            本场结束
            <span class="hour">10</span>
            <span class="tt">:</span>
            <span class="second">00</span>
          </div>
          <div class="more">
            <img src="./images/more.png">
          </div>
        </div>
        <!--疯抢物品-->
        <div class="swiper-container surprise-list">
          <ul class="swiper-wrapper">
            <li class="swiper-slide">
              <img src="./images/sur1.jpg">
              <span class="price">￥0.99</span>
              <span class="discount">省8.91</span>
            </li>
            <li class="swiper-slide">
              <img src="./images/sur2.jpg">
              <span class="price">￥1.80</span>
              <span class="discount">省16.20</span>
            </li>
            <li class="swiper-slide">
              <img src="./images/sur3.jpg">
              <span class="price">￥3.20</span>
              <span class="discount">省28.80</span>
            </li>
            <li class="swiper-slide">
              <img src="./images/sur4.jpg">
              <span class="price">￥2.20</span>
              <span class="discount">省19.80</span>
            </li>
            <li class="swiper-slide">
              <img src="./images/sur5.jpg">
              <span class="price">￥3.20</span>
              <span class="discount">省28.80</span>
            </li>
            <li class="swiper-slide">
              <img src="./images/sur6.jpg">
              <span class="price">￥54.40</span>
              <span class="discount">省489.60</span>
            </li>
            <li class="swiper-slide">
              <img src="./images/sur7.jpg">
              <span class="price">￥9.00</span>
              <span class="discount">省81.00</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="power-brand">
        <img src="./images/powerbrond.jpg">
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
  export default{
    mounted(){
      new Swiper('.next-content',{
        loop:true,
        pagination:{
          el:'.swiper-pagination',
          clickable:true,
        },
      });
      new Swiper('.surprise-list',{
        slidesPerView:3,
        spaceBetween: 30,
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .wrapper
    padding-top 70px
    padding-bottom 55px
    .all-header
      .home-header
        z-index 100
        background #fff
        width 100%
        top 0
        position fixed
        box-sizing border-box
        padding 10px 10px 0
        .header-top
          height 25px
          display flex
          line-height 25px
          .pet-city
            flex 25%
            text-align center
          .pet-search
            flex 65%
            position relative
            input
              display: block
              height 100%
              width 100%
              background: #e9e9e9
              box-sizing border-box
              padding 3px 5px
              border-radius 5px
              font-size 14px
            .pet-btn
              position absolute
              height 100%
              top 0
              right 5px
          .tip-talk
            flex 10%
            display flex
            justify-content center
            align-items center
            .iconfont
              font-size 22px
              color #333
        .pet-tabs
          margin-top 10px
          display flex
          .tab-item
            flex 1
            display flex
            justify-content center
            span
              height 20px
              color black
              padding-bottom 5px
              font-size 15px
              &current
                color #66AE59
                box-shadow 0 -2px 0 #66AE59 inset
    .content
      .next-content
        width 100%
      .good-list
        .good-list-wrapper
          display flex
          flex-wrap wrap
          >li
            flex 20%
      .surprise
        .surprise-header
          clearFix()
          padding 10px
          height 22px
          line-height 22px
          .img
            width 24%
            float left
          .time
            float left
            width 45%
            text-align right
            font-size 14px
            margin-left 13%
            .hour,.second
              border 1px solid
          .more
            float left
            width 18%


        .surprise-list
          padding-bottom 10px
          width 100%
          .swiper-wrapper
            .swiper-slide
              text-align center
              .price
                display block
                color red
              .discount
                font-size 12px
                color #aaa
















</style>
