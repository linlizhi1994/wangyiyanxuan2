<template>
    <div>
      <div class="imgDiv" v-if="shiwuUpImg">
        <img :src="shiwuUpImg.ad.picUrl">
      </div>

      <div class="item_wrap" v-for="item in newArr[id]" >
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
              <div><span></span>{{item.readCount|computeCount}}人看过</div>
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
            <div class="personSee">{{item.readCount|computeCount}}人看过</div>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState,mapGetters} from "vuex"
    export default {
        name: "shiwu-tui-jian",
      props:['id'],

      computed:{

        ...mapState(['shiwuData','shiwuData2','shiwuTabList']),
        ...mapGetters(['newArr','shiwuUpImg'])
      },
      filters:{
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
      },
      mounted(){
          //console.log(this.$route.params.id)
        console.log(this.id)
      }
    }
</script>

<style scoped lang="stylus">
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
