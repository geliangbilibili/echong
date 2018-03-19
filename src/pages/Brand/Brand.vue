<template>
  <div class="brand-box" v-if="brand.length">
    <div class="brand-wrapper">
      <div class="brand-content" v-for="(i,index) in brand">
        <p class="title" >
          ——{{i.title}}——
        </p>
        <ul class="brand-content-list">
          <li class="brand-list-item" v-for="(item,index) in i.list">
            <img class="item-img" :src="item.logo">
            <p class="text-item" >{{item.name}}</p>
            <p class="item-address">{{item.address}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default{
    mounted(){
      this.$store.dispatch('getBrand', ()=>{
        this.$nextTick(()=>{
          if(this.brand ){

          }
          this.brand = new BScroll('.brand-box',{
            click:true
          })
        })
      })
    },
    computed:{
      ...mapState(['brand'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .brand-box
    background: #eee;
    overflow hidden
    .brand-content
      text-align center
      background: #fff;
      margin 3px 0 10px
      overflow hidden
      .title
        margin 20px
        color #aaa
        font-size 13px
      .brand-content-list
        display flex
        flex-wrap wrap
        .brand-list-item
          flex  0 0 33.33%
          width 100%
          margin 0 0 20px
          margin-top 10px
          font-size 13px
          .item-img
            box-sizing border-box
            border-radius 2px
            width 80%
            border 1px solid #ddd
            margin 0 auto
          .item-address
            color #ddd
          p
            margin 5px 0

</style>
