<template>
  <div class="personal">
    <div class="head">
      <span class="iconfont icon-home"></span>
      <span class="headContent">网易严选</span>
      <span class="iconfont icon-search"></span>
      <span class="iconfont icon-gouwuche"></span>
    </div>

    <div class="logo">
      <img src="./img/bd139d2c42205f749cd4ab78fa3d6c60.png">
    </div>

    <div class="btn_wrap">
      <div class="phoneLogin">
        <i class="iconfont icon-phone01"></i>
        <span>手机号登录</span>
      </div>

       <div class="emailLogin">
        <i class="iconfont icon-icon-email"></i>
        <span>邮箱账号登录</span>
      </div>

      <div class="register">
        <span>手机号快速注册</span>
        <i class="iconfont icon-dayuhao"></i>
      </div>
    </div>
  </div>

</template>

<script>
    export default {

    }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .personal
    .head
      bottom-border-1px(gray)
      width 100%
      height 0.88rem
      background-color #fff
      line-height 0.88rem
      .headContent
        margin-left 2.2rem
        margin-right 1.5rem
        font-size 0.4rem
      .icon-home
        margin-left 0.2rem
        font-size 0.48rem
      .icon-search
        font-size 0.48rem
      .icon-gouwuche
        font-size 0.48rem
    .logo
      margin-top 1.50rem
      margin-bottom 1.6rem
      width 100%
      text-align center
      img

        width 2.68rem
        height 1.08rem
    .btn_wrap
      width 100%
      .phoneLogin
        width 6.7rem
        height 0.94rem
        text-align center
        background-color red
        margin 0 auto
        line-height 0.94rem

</style>
