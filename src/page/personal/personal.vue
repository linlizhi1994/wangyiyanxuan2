<template>
  <div class="personal">
   <!-- <div class="head">
      <span class="iconfont icon-home"></span>
      <span class="headContent">网易严选</span>
      <span class="iconfont icon-search"></span>
      <span class="iconfont icon-gouwuche"></span>
    </div>-->
    <head-top :title="'网易严选'"></head-top>

    <div class="logo">
      <img src="./img/bd139d2c42205f749cd4ab78fa3d6c60.png">
    </div>


     <btn :phoneMsg="'手机号登录'" :emailMsg="'邮箱登录'">
       <i class="iconfont icon-phone01" slot="phone"></i>
       <i class="iconfont icon-icon-email" slot="email"></i>

       <div class="register" slot="register">
         <span>手机号快速注册</span>
         <i class="iconfont icon-dayuhao"></i>
       </div>
     </btn>
   <!-- <div class="btn_wrap">
      <div class="phoneLogin">
        <i class="iconfont icon-phone01"></i>
        <span @click="$router.replace('/phonelogin')">手机号登录</span>
      </div>

       <div class="emailLogin">
        <i class="iconfont icon-icon-email"></i>
        <span>邮箱账号登录</span>
      </div>

      <div class="register">
        <span>手机号快速注册</span>
        <i class="iconfont icon-dayuhao"></i>
      </div>
    </div>-->
  </div>

</template>

<script>
  import headTop from "../../components/headtop/headtop"
  import btn from "../../components/btn/btn"
    export default {
      components:{
        headTop,
        btn
      }
    }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"

  .personal
    overflow hidden
    background-color #F2F5F4
    //z-index 1000
    .logo
      margin-top 3rem
      margin-bottom 1.6rem
      width 100%
      text-align center
      img
        width 2.68rem
        height 1.08rem

</style>
