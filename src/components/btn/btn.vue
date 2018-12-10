<template>
  <div class="btn_wrap">
    <div class="phoneLogin">
      <!--<i class="iconfont icon-phone01"></i>-->
      <slot name="phone"></slot>
      <span @click="handleC">{{phoneMsg}}</span>
    </div>

    <div class="emailLogin">
      <!--<i class="iconfont icon-icon-email"></i>-->
      <slot name="email"></slot>
      <span @click="handleD">{{emailMsg}}</span>
    </div>

    <!--<div class="register">
      <span>手机号快速注册</span>
      <i class="iconfont icon-dayuhao"></i>
    </div>-->
    <slot name="register"></slot>
  </div>
</template>

<script>
    export default {
        name: "btn",
       props:['phoneMsg','emailMsg','loginEvent'],
      methods:{
          handleC(){
            if(this.phoneMsg === '登录'){
              this.loginEvent()
            }else if(this.phoneMsg === '手机号登录'){
              this.$router.replace('/phonelogin')
            }
          },
        handleD(){
            if(this.emailMsg === '其他登录方式'){
              this.$router.replace('/personal')
            }
          if(this.emailMsg === '邮箱登录'){
            this.$router.replace('/emaillogin')
          }
        }
      }
    }
</script>

<style scoped lang="stylus">
  .btn_wrap
    width 100%
    .phoneLogin
      border-radius 0.1rem
      width 6.7rem
      height 0.94rem
      text-align center
      background-color #B4282D
      margin 0 auto
      line-height 0.94rem
      color white
    .emailLogin
      width 6.7rem
      height 0.94rem
      text-align center
      background-color transparent
      line-height 0.94rem
      margin 0 auto
      border 1px solid #B4282D
      border-radius 0.1rem
      margin-top 0.3rem
      margin-bottom 0.3rem
    .register
      width 6.7rem

      text-align center
      //background-color red

      margin 0 auto


</style>
