<template>
  <div class="shiwu">
   <head-top :title="'发现镇加'" class="head"></head-top>
    <div class="content_wrap">
      <div class="content">
        <div class="headUp">
          <ul class="nav">
            <li class="on" v-for="(item,index) in shiwuTabList" :key="index">
              <router-link :to="`/shiwu/shiwutuijian/${index}`">{{item.tabName}}</router-link>
            </li>
          </ul>
        </div>




      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  import {mapState,mapGetters} from "vuex"
  import headTop from "../../components/headtop/headtop"
    export default {


      computed:{
        /* ...mapState(['shiwuData','shiwuTabList']),
           ...mapGetters(['newArr','shiwuUpImg'])*/
        ...mapState(['shiwuTabList'])
      },
    components:{
      headTop
    },

    /*  filters:{
          computeCount(val){
            var value = val.toString()
            if(value.length <= 3){//当数值是 比如1299 时就显示1299
              return value
            }
            if(value.length >= 6){//当数值是 比如440000 时 就显示44w
              return (value/10000).toFixed(0)+'w'
            }
            return (val/1000).toFixed(1)+'k' //当数值是 比如66000 时 就显示66.0k
          }
      },*/
      mounted(){
      this.$store.dispatch('getShiwuData')
        this.$store.dispatch('getShiwuData2')
        this.$store.dispatch('getShiwuTabList')
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
          //justify-content space-around
          //display flex
          width 100%
          height 0.7rem
          background-color #fff
          line-height 0.7rem
          position fixed
          top 0.88rem
          z-index 200
          display inline-block
          white-space nowrap
          li
            display inline-block
            position relative
            a
              padding 0 0.4rem
              &.router-link-active
                color red
                &:after
                  content ''
                  position absolute
                  left 50%
                  bottom 0.03rem
                  width 0.7rem
                  height 0.04rem
                  transform translateX(-50%)
                  //z-index 300
                  background-color red



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



</style>
