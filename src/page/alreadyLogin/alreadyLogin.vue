<template>
    <div class="alreadyLogin">
      <div class="head">
        <div class="headLeft">
          <img src="./img/8945ae63d940cc42406c3f67019c5cb6.png">
          <div class="personMsg">
            <span>{{users.phone}}</span>
            <div>普通用户</div>
          </div>
        </div>

      </div>

      <div class="content">
        <ul class="list">
          <li>
            <span class="iconfont icon-liwu"></span>
            <p>我的的订单</p>
          </li>
          <li>
            <span class="iconfont icon-liwu"></span>
            <p>我的的订单</p>
          </li>
          <li>
            <span class="iconfont icon-liwu"></span>
            <p>我的的订单</p>
          </li>
          <li>
            <span class="iconfont icon-liwu"></span>
            <p>我的的订单</p>
          </li>
        </ul>
      </div>

      <div class="btn">
        <div class="btnMsg" @click="handleOut">退出登录</div>
      </div>
    </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  import {mapState} from "vuex"
    export default {
        name: "already-login",
      computed:{
        ...mapState(['users'])
      },
      methods:{
        handleOut(){
          MessageBox.confirm('确定退出吗?').then(
            (action) => {this.$store.dispatch('loginOut') }),
            (action) =>{console.log("点击了取消")}

        }
      }
    }
</script>

<style scoped lang="stylus">
.alreadyLogin
  background-color #F4F4F4
  height 20rem
  .head
    width 100%
    height 2.7rem
    background-color #BEA166
    .headLeft
      //background-color red
      width 5.1rem
      height 2.7rem
      margin-left 0.3rem
      display flex
      img
        width 1.42rem
        height 1.42rem
        border-radius 50%
        margin-top 0.6rem
      .personMsg
          color white
          margin-top 1rem
          margin-left 0.3rem
  .content
    background-color #fff
    .list
      display flex
      flex-wrap wrap
      li
        box-sizing border-box
        padding-top 0.4rem
        width 2.46rem
        height 1.8rem
        //background-color yellow
        border 1px solid gray
        .iconfont
          margin 0 auto
          margin-left 1rem
        p
          width 100%
          text-align center
  .btn
    margin-top 0.5rem
    width 100%
    height 0.88rem
    background-color #fff
    line-height 0.88rem
    text-align center
</style>
