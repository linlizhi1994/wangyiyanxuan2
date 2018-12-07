<template>
  <div class="cart">
    <header class="head">
      <span class="cartCat">购物车</span>
      <span class="volume">领劵</span>
    </header>
    <div class="cartContent">
      <ul class="nav">
        <li>30天无忧退货</li>
        <li>48小时快速退款</li>
        <li>满88免邮费</li>
      </ul>

      <div class="empty">
        <span class="iconfont icon-gouwuche logo"></span>
        <div class="addSome">去添加点什么吧</div>
        <div class="btn" @click="$router.replace('/personal')" v-if="!users._id">登录</div>
     </div>
  </div>

  </div>

</template>

<script>
  import {mapState} from "vuex"
    export default {
      computed:{
        ...mapState(['users'])
      }
        }
</script>

<style scoped lang="stylus">
  .cart
    height 13.34rem
    width 100%
    .head
      width 100%
      height 0.88rem
      text-align center
      background-color #fff
      position fixed
      left 0
      top 0
      z-index 100
      .cartCat
        line-height 0.88rem
        font-size 0.38rem
      .volume
        font-size 0.3rem
        color red
        position absolute
        right 0.7rem
        top 0.3rem
    .cartContent
      //padding-top 0.88rem
      height 100%
      background-color #F4F4F4
      .empty
        position relative
        .logo
          font-size 3rem
          position absolute
          left 2.3rem
          top 3.68rem
        .addSome
          position absolute
          left 3rem
          top 6.68rem
          font-size 0.28rem
        .btn
          line-height 0.92rem
          text-align center
          position absolute
          left 1.6rem
          top 7.18rem
          width 4.8rem
          height 0.92rem
          background-color red
          color white
          border-radius 0.1rem
          font-size 0.3rem
      .nav
        display flex
        justify-content space-around
        width 100%
        line-height 0.7rem
        height 0.7rem
        position fixed
        top 0.88rem
</style>
