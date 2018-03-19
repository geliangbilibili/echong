<template>
  <div class="wrapper" v-if="home.lanmu_list">
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
        <div class="pet-tabs swiper-container">
          <div class="swiper-wrapper" >
            <span class="swiper-slide" v-for="(arr,index) in home.menus" @click="test(index)"
                  :style="{color:index===0?'yellowgreen':''}"
            >{{arr.menu_name}}</span>
          </div>
        </div>
      </header>
    </div>
    <!--中间部位-->
    <div class="content">
      <!--轮播图1-->
      <div class="next-content swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in home.dog_banner">
            <img :src="item">
          </div>
        </div>
        <!--swiper插件使用 小圆点-->
        <div class="swiper-pagination"></div>
      </div>
      <!--大狗下半身-->
      <div class="big-dog" >
        <img :src="home.dog_img">
      </div>
      <!--导航栏-->
      <div class="good-list">
        <ul class="good-list-wrapper" >
          <li
            v-for="(arr,index) in home.menu_list"
          ><img :src="arr"></li>
        </ul>
      </div>
      <!--秒杀图-->
      <div class="miaosha">
        <img :src="home.miaosha">
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
      <!--品牌力量-->
      <div class="power-brand">
        <img :src="home.brand_power">
      </div>
      <!--动态gif-->
      <div class="bg-gif">
        <img :src="home.gif">
      </div>
      <!--vip-->
      <div class="vip">
        <img :src="home.vip">
      </div>
      <!--extra-->
      <div class="extra">
        <div v-for="(arr,index) in home.vip_services"><img :src="arr"></div>
      </div>
      <!--大牌团购-->
      <div class="dapai-tuangou">
        <img :src="home.dapaituan">
      </div>
      <!--轮播图2-->
      <div class="tuangou-list swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in home.dapaituan_list">
            <img :src="item">
          </div>
        </div>
        <!--小圆点-->
        <div class="swiper-pagination"></div>
      </div>
      <!--大牌好货-->
      <div class="dapai-haohuo">
        <img :src="home.haohuo">
      </div>
      <!--好货列表-->
      <div class="haohuo-list" v-for="(item,index) in home.haohuo_list">
        <div class="left">
          <img v-for="(arr,index) in item.left" :src="arr">
        </div>
        <div class="right" >
          <img v-for="(arr,index) in item.right" :src="arr">
        </div>
      </div>
      <!--最惨奖-->
      <div class="zuicanjiang">
        <div class="zuicanjiang-img">
          <img :src="home.zuican">
        </div>
        <div class="zuicanjiang-content">
          <img :src="home.zuican_content">
        </div>
      </div>
      <!--特别星球-->
      <div class="special">
        <img :src="home.special">
      </div>
      <!--潮品-->
      <div class="special-list" >
        <div class="left">
          <img :src="home.special_list[0]">
        </div>
        <div class="right">
          <img :src="home.special_list[1]">
          <img :src="home.special_list[2]">
        </div>
      </div>
      <!--特色栏目-->
      <div class="special-lanmu">
        <img :src="home.lanmu">
      </div>
      <!--特色列表-->
      <div class="special1-list">
        <div class="left1">
          <img v-for="(arr,index) in home.lanmu_list.left" :src="arr">
        </div>
        <div class="left2">
          <img v-for="(arr,index) in home.lanmu_list.right" :src="arr">
        </div>
      </div>
      <!--底部-->
      <div class="content-footer">
        <p class="footer-top" ref="footer-tabs"  @click="footerTabs">
          <span class="current">触屏版</span>
          <span>手机客户端</span>
          <span>关于我们</span>
          <span>联系我们</span>
        </p>
        <p class="footer-bottom">
          <span class="text">© wap.epet.com 版权：重庆易宠科技有限公司</span>
        </p>
      </div>
    </div>
    <div class="dog">
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import {mapState} from 'vuex'
  export default{
    mounted(){
      this.$store.dispatch('getHomePage', ()=>{
        this.$nextTick(()=>{
          new Swiper('.pet-tabs',{
            slidesPerView:5,/*数量*/
            /*spaceBetween: 10,/!*间距*!/*/
          });
          new Swiper('.next-content',{
            loop:true,
            autoplay:{
              delay:3000,
              disableOnInteraction: false,
            },
            pagination:{
              el:'.swiper-pagination',
              clickable:true,
            },
          });
          new Swiper('.surprise-list',{
            slidesPerView:3.6,
            spaceBetween: 30,
          });
          new Swiper('.tuangou-list',{
            loop:true,
            autoplay:{
              delay:3000,
              disableOnInteraction: false,
            },
            pagination:{
              el:'.swiper-pagination',
              clickable:true,
            }
          });
        })
      })
    },
    methods:{
      footerTabs(){},
      test(index){
        const spans = document.querySelector('.pet-tabs').getElementsByTagName('span')
        const target = spans[index]

        for(let i=0;i<spans.length;i++){
          spans[i].style.color = ''
        }
        target.style.color = 'yellowgreen'
      }
    },
    computed:{
      ...mapState({home:'homepage'})
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
          height 20px
          display flex
          text-align center
          .swiper-wrapper
            flex 1
            text-align  center
            .swiper-slide
              height 20px
              color black
              padding-bottom 5px
              font-size 15px
    .content
      .next-content
        width 100%
        height 160px
        .swiper-pagination
          .swiper-pagination-bullet-active
            display inline-block
            background: #fff;
            width 15px
            height 6px
            border-radius 3px
      .good-list
        .good-list-wrapper
          display flex
          flex-wrap wrap
          >li
            flex  20%
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
      .extra
        display flex
        flex-wrap wrap
        div
          flex 0 0 50%
      .tuangou-list
        .swiper-pagination
          .swiper-pagination-bullet-active
            display inline-block
            background: #fff;
            width 15px
            height 6px
            border-radius 3px

      .haohuo-list
        display flex
        flex-wrap wrap
        div
          flex 0 0 50%
      .special-list
        display flex
        .left
          flex 1
        .right
          flex 1
          img:last-child
            margin-top -2px
      .special1-list
        display flex
        flex-wrap wrap
        div
          flex 0 0 50%
      .content-footer
        padding 20px 20px
        text-align center
        .footer-top
          font-size 15px
          span
            margin 5px
          span.current
            color red
        .footer-bottom
          margin-top 15px
          font-size 12px
    .dog
      position fixed
      z-index 2
      right 0
      bottom 100px
      width 41px
      height 46px
      background url('./images/godog.png');
      background-size 82px 46px
      background-repeat no-repeat
      animation blink 2s steps(1) infinite;
      background-position 0 0
</style>
