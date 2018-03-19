<template>
  <div class="class" v-if="category.length">
    <div class="nav-list-wrapper">
      <ul class="nav-list">
        <li  v-for="(item,index) in category">
          <span class="text" @click="leo(index)" :style="{color:index===cindex?'red':''}">{{item.name}}</span>
        </li>
      </ul>
    </div>

    <div class="nav-content-wrapper">
      <div class="content-box">
        <div class="goods-content">
          <a class="title">
            {{copmcurr[0].title}}
            <img class="show-all-img" src="./images/cate_right_img.png">
          </a>
          <ul class="nav-content-list">
            <li class="content-list-item" v-for="(i,index) in copmcurr[0].list">
              <img class="item-img" :src="i.photo">
              <p class="text-item">{{i.name}}</p>
            </li>
          </ul>
        </div>
        <div class="brand-content" v-if="copmcurr[1]">
          <a class="title">
            {{copmcurr[1].title}}
          </a>
          <ul class="brand-content-list">
            <li class="brand-list-item" v-for="(a,index) in copmcurr[1].list">
              <img class="item-img" :src="a.logo">
              <p class="text-item">{{a.name}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default{
   data(){
     return{
       cate_list:[],
       cindex:0
     }
   },
    mounted(){
      this.$store.dispatch('getCateGory', ()=>{
        this.$nextTick(()=>{
          this.content = new BScroll('.nav-content-wrapper')
          this.nav = new BScroll('.nav-list-wrapper',{
            click:true
          })
        })
      })
    },
    watch:{
      category :function (newcategory) {
        this.cate_list = newcategory[0].cate_list
      },
      copmcurr:function(){
        if(this.content){
          this.content.refresh();
        }
      },
    },
    methods:{
      leo(index){
       const spans = document.querySelector('.nav-list').getElementsByTagName('span')
        const target = spans[index]

       for (let i = 0; i < spans.length; i++) {
           spans[i].style.color = ''
       }
        target.style.color = 'red'
        this.cindex = index
      },


    },
    computed:{
      ...mapState(['category']),
      copmcurr(){
        const {cindex}=this
        if(this.category.length!==0){
          return this.category[cindex].cate_list
        }
        return {}
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .class
    background: #fff;
    height 100%
    display flex
    overflow hidden
    justify-content space-between
    .nav-list-wrapper
      height calc(100% - 50px)
      border-right 5px solid #f3f4f5
      flex 20%
      text-align center
      li
        width 100%
        height 50px
        line-height 40px
        .text
          display block
          padding 10px
          font-size 13px
    .nav-content-wrapper
      margin 0 0 0 5px
      flex 75%
      box-sizing border-box
      height 667px
      .content-box
        padding-bottom 100px
        margin-top -8px
        background: #fff;
        .goods-content
          border-bottom-1px(#eee);
          margin 10px 0 0
          padding 20px 5px 0
          .title
            height 20px
            line-height 20px
            color #888
            margin 5px 0
            font-size 12px
            .show-all-img
              float right
              height 10px
              margin 5px 5px 0
              width auto
          .nav-content-list
            overflow hidden
            display flex
            flex-wrap wrap
            .content-list-item
              flex 0 0 33.33%
              .text-item
                margin 15px 0
                text-align center
                font-size 13px
                color #555
        .brand-content
          margin-top 20px
          padding 0 5px 60px
          .title
            height 20px
            line-height 20px
            color #888
            margin 5px 0
            font-size 12px
          .brand-content-list
            display flex
            flex-wrap wrap
            .brand-list-item
              flex 50%
              .item-img
                width 80%
                height auto
                margin 0 auto
                border 1px solid #eee;
                border-radius 2px
              .text-item
                text-align center
                font-size 12px
                margin 10px 0
</style>
