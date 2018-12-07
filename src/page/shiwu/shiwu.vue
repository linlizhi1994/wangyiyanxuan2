<template>
  <div class="shiwu">
   <head-top :title="'发现镇加'" class="head"></head-top>
    <div class="content_wrap">
      <div class="content">
        <div class="headUp">
          <ul class="nav">
            <li class="on">推荐</li>
            <li>大人</li>
            <li>伤心</li>
            <li>哈哈</li>
            <li>HOME</li>
          </ul>
        </div>

        <div class="imgDiv" v-if="shiwuUpImg">
          <img :src="shiwuUpImg.ad.picUrl">
        </div>

        <div class="item_wrap" v-for="item in newArr" >
          <div class="item">
            <!--显示 组 的a标签-->
          <a class="itema" v-if="item.type === 1">
          <div class="info">
            <div class="items">
              <span class="imgSpan"><img :src="item.avatar"></span>
              <span class="msg">{{item.nickname}}</span>
            </div>
            <div>{{item.title}}</div>
            <div>{{item.subTitle}}</div>
            <div><span></span>21.1k人看过</div>
          </div>

            <div class="divImg">
              <img :src="item.picUrl">
            </div>
          </a>
            <!--显示 选妹 a标签-->
          <a class="changeIn" v-if="item.type === 0">
              <div class="headImg"><img :src="item.avatar">{{item.nickname}} </div>
              <div class="msg">{{item.title}}</div>
              <div class="imgDiv2"><img :src="item.picUrl"></div>
              <div class="personSee">83.1k人看过</div>
            </a>
          </div>
        </div>
          <!-- 显示选妹的div 最后把他合并到显示服装组的div中去-->
       <!--<div class="change" >
          <a class="changeIn">
            <div class="headImg"><img src="./img/c78fd2991f97593e17cdb6fdad5044b1.png">选妹</div>
            <div class="msg">是的范德萨范德萨发的似懂非懂</div>
            <div class="imgDiv2"><img src="./img/b7db4d98e47a94adda8b4d61bc5f4af0.jpg"></div>
            <div class="personSee">83.1k人看过</div>
          </a>
        </div>-->

      </div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapGetters} from "vuex"
  import headTop from "../../components/headtop/headtop"
    export default {

    components:{
      headTop
    },
      mounted(){
      this.$store.dispatch('getShiwuData')
      },

      computed:{
        ...mapState(['shiwuData']),
          ...mapGetters(['newArr','shiwuUpImg'])
      },
    }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
.shiwu
  .content_wrap
    width 100%
    padding-top 0.9rem
    .content
      //padding-top 1.7rem
      overflow hidden
      width 100%
      //height 111rem
      background-color #F4F4F4
      .headUp
        width 100%
        height 0.7rem
        .nav
          bottom-border-1px(gray)
          justify-content space-around
          display flex
          width 100%
          height 0.7rem
          background-color #fff
          line-height 0.7rem
          position fixed
          top 0.88rem
          z-index 200
          li
            position relative
            &.on
              &:after
                content ''
                position absolute
                width 100%
                height 0.04rem
                background-color red
                bottom 0.03rem
                z-index 100
                transform translateX(-100%)


      .imgDiv
        margin-top 0.3rem
        position relative
        //top 0.7rem
        width 100%
        height 4.48rem
        background-color #fff
        img
          margin-left 0.3rem
          margin-top 0.3rem
          height 3.76rem

      .item_wrap
        margin-top 0.3rem
        background-color #fff
        .itema
            display flex
            justify-content space-between
            .info
              margin-left 0.3rem
              .items
                .imgSpan
                  color red
                  img
                    width 0.54rem
                    height 0.54rem
                    border-radius 50%


            .divImg
              img
                width 2.72rem
                height 2.72rem
                margin-right 0.3rem
        .changeIn
          .headImg
            img
              width 0.57rem
              height 0.57rem
              margin-left 0.3rem
              border-radius 50%
          .imgDiv2
              margin-left 0.3rem
              img
                width 6.9rem
                height 3.72rem

            .msg
              margin-left 0.3rem
            .personSee
              margin-left 0.3rem


      .change
        background-color #fff
        margin-top 0.3rem
        .changeIn
          .headImg
            img
              width 0.57rem
              height 0.57rem
              margin-left 0.3rem
              border-radius 50%
          .imgDiv2
            margin-left 0.3rem
            img
              width 6.9rem
              height 3.72rem

          .msg
            margin-left 0.3rem
          .personSee
            margin-left 0.3rem


</style>
