<template>
  <div class="phoneLogin">
    <head-top :title="'网易严选'"></head-top>
    <div class="imgDiv">
      <img src="./img/bd139d2c42205f749cd4ab78fa3d6c60.png">
    </div>
    <div class="inputBoxs">
      <div class="inputBox1">
        <input class="input1" placeholder="请输入邮箱账号" />
      </div>
      <div class="inputBox2">
        <input placeholder="密码"/>
      </div>
      <div class="question">
        <span class="s1">注册账号</span>
        <span class="s2">忘记密码</span>
      </div>
    </div>
    <btn :phoneMsg="'登录'" :emailMsg="'其他登录方式'" ></btn>
  </div>
</template>

<script>
  import btn from "../../components/btn/btn"
  import headTop from "../../components/headtop/headtop"
    export default {
        name: "email-login",
      components:{
        btn,
        headTop
      }
    }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .phoneLogin
    overflow hidden
    //background-color gray
    width 100%
    .imgDiv
      margin 0 auto
      //background-color red
      margin-top 1.4rem
      width 1.96rem
      img
        width 1.96rem
        height 0.72rem

    .inputBoxs
      margin-top 1.7rem
      .inputBox1

        width 100%
        //background-color red
        .input1
          //bottom-border-1px(gray)
          border-bottom 1px solid gray
          width 5.7rem
          padding 0.2rem 0.3rem
          //height 0.94rem
          margin-bottom 0.15rem
          margin-left 0.6rem
          outline none
      .inputBox2
        position relative

        .testCode
          padding 0.1rem
          position absolute
          top 0.08rem
          right 0.7rem
          border 1px solid red
          border-radius 0.1rem
        input
          outline none
          //bottom-border-1px(gray)
          border-bottom 1px solid gray
          width 5.7rem
          padding 0.2rem 0.3rem
          //height 0.94rem
          margin-bottom 0.15rem
          margin-left 0.6rem
      .question
        margin-top 0.3rem
        margin-bottom  0.5rem
        .s1
          margin-left 0.7rem
        .s2
          margin-left 2.5rem
</style>
