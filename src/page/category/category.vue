<template>
  <div class="category">
    <div class="head_wrap">
      <div class="head">
        <span class="iconfont icon-search icon-search"></span>
        <span>搜索商品，共1999999件商品</span>
      </div>
    </div>

    <div class="content">
      <div class="leftContent_wrap">
        <ul class="leftContent">
          <li v-for="(category,index) in categoruData" :key="category.id" @click="handleC(category)" ref="leftLi">
            <a @click="handleIsChang(index)" class="abiaoqian">{{category.name}}</a>
          </li>
          <div class="leftLine"></div>
        </ul>
      </div>

      <div class="rightContent_wrap">
        <ul class="rightContent" >
          <li class="item1" v-for="(item,index) in cate.subCateList" v-if="cate.type === 1" :key="index">
            <div class="item3" >
              <img :src="item.bannerUrl">
              <div>{{item.name}}</div>
            </div>
          </li>

         <div class="item2" v-for="cat in cate.subCateList" v-if="cate.type === 0">
            <div class="up" >
              <div class="chuangpin">{{cat.name}}</div>
              <ul class="jiaju">
                <li v-for="item3 in cat.categoryList">
                  <img :src="item3.wapBannerUrl">
                  <div class="jiantao">{{item3.name}}</div>
                </li>

              </ul>
            </div>
          </div>

         <!-- <li>
            <img src="./img/39c1c32ca2301ced934e35db33150637.png">
            <div>规划共和国工会</div>
          </li>
          <li>
            <img src="./img/39c1c32ca2301ced934e35db33150637.png">
            <div>的水电费第水电费</div>
          </li>
          <li>
            <img src="./img/39c1c32ca2301ced934e35db33150637.png">
            <div>规划共和国工会</div>
          </li>
          <li>
            <img src="./img/39c1c32ca2301ced934e35db33150637.png">
            <div>的水电费第水电费</div>
          </li>
          <li>
            <img src="./img/39c1c32ca2301ced934e35db33150637.png">
            <div>规划共和国工会</div>
          </li>
          <li>
            <img src="./img/39c1c32ca2301ced934e35db33150637.png">
            <div>的水电费第水电费</div>
          </li>
          <li>
            <img src="./img/39c1c32ca2301ced934e35db33150637.png">
            <div>规划共和国工会</div>
          </li>
          <li>
            <img src="./img/39c1c32ca2301ced934e35db33150637.png">
            <div>的水电费第水电费</div>
          </li>
          <li>
            <img src="./img/39c1c32ca2301ced934e35db33150637.png">
            <div>规划共和国工会</div>
          </li>
          <li>
            <img src="./img/39c1c32ca2301ced934e35db33150637.png">
            <div>的水电费第水电费</div>
          </li>
          <li>
            <img src="./img/39c1c32ca2301ced934e35db33150637.png">
            <div>规划共和国工会</div>
          </li>
          <li>
            <img src="./img/39c1c32ca2301ced934e35db33150637.png">
            <div>的水电费第水电费</div>
          </li>
          <li>
            <img src="./img/39c1c32ca2301ced934e35db33150637.png">
            <div>规划共和国工会</div>
          </li>
          <li>
            <img src="./img/39c1c32ca2301ced934e35db33150637.png">
            <div>规划共和国工会</div>
          </li>
          <li>
            <img src="./img/39c1c32ca2301ced934e35db33150637.png">
            <div>的水电费第水电费</div>
          </li>
          <li>
            <img src="./img/39c1c32ca2301ced934e35db33150637.png">
            <div>规划共和国工会</div>
          </li>
          <li>
            <img src="./img/39c1c32ca2301ced934e35db33150637.png">
            <div>的水电费第水电费</div>
          </li>
          <li>
            <img src="./img/39c1c32ca2301ced934e35db33150637.png">
            <div>规划共和国工会</div>
          </li>-->
          <div class="imgDiv" ><img :src="cate.wapBannerUrl"></div>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from "better-scroll"
    export default {
        name: "category",
      data(){
        return{
          cate:{},

        }
      },
      mounted(){
          this.$store.dispatch("getCategoryData",()=>{
            this.$nextTick(()=>{
              new BScroll('.leftContent_wrap',{
                click:true
              })

              new BScroll('.rightContent_wrap',{
                click:true
              })
            })
          })

        //this.computedHeight()
      },
      computed:{
        ...mapState(['categoruData'])
      },
      methods:{

        handleC(category){
          this.cate = category

        },

        handleIsChang(i){
            //console.log(i)
           document.querySelectorAll('.abiaoqian').forEach((val)=>{
            val.classList.remove("on")
            val.style.color = 'black'
          })
          let aNode = document.querySelectorAll('.abiaoqian')[i]
                aNode.classList.add("on")
                aNode.style.color = "red"
        }

          //动态的计算页面中content的高度。让它的高度随着设备的高度改变而改变，比多说iphonex的高度会高一点
        /*  computedHeight(){
            let contentDiv=document.querySelector(".content")
            let height = (window.innerHeight || document.documentElement.clientHeight)+'px'
            contentDiv.style.height = height
          }*/
      },
    /*  watch:{
        categoruData(){
          this.$nextTick(() => {
            new BScroll('.leftContent_wrap',{
              click:true
            })
          })
        }
      }*/

  /*    watch:{
        categoruData(){
          this.$nextTick(()=>{
           new BScroll('.leftContent_wrap',{
              click:true
            })

            console.log("scroll======+++")

            new BScroll('.rightContent_wrap',{
              click:true
            })
          })
        }
      }*/
      }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .category
    width 100%
    //overflow:scroll;
    //overflow-y:hidden;
    .head_wrap
      bottom-border-1px(gray)
      width 100%
      height 0.88rem
      background-color #fff
      position fixed
      top 0
      left 0
      z-index 100

      //bottom-border-1px(gray)
      //line-height 0.88rem
      .head
        background-color #EDEDED
        text-align center
        width 6.9rem
        height 0.56rem
        margin 0rem auto
        line-height 0.56rem
        border-radius 0.2rem
        position relative
        top 0.15rem

    .content
      width 100%
      height 11.45rem
      display flex
      //background-color hotpink
      padding-top 0.88rem
      padding-bottom 1rem
      //justify-content space-between
      overflow hidden//给content设置overflow hidden 还有设置固定的高度 禁止默认的滚动条
      .leftContent_wrap
        //background-color #7e8c8d
        .leftContent
          background-color #fff
          position relative
          li
            //width 1.62rem
            //height 0.5rem
            //line-height 0.5rem
            margin-bottom 0.36rem
            //text-align center
            a
              display block
              width 1.62rem
              height 0.5rem
              line-height 0.5rem
              text-align center
              color black
              position relative
              &.on
                &:after
                  content ''
                  position absolute
                  left 0
                  width 0.04rem
                  height 100%
                  background-color red
          .leftLine
            content ''
            position absolute
            //z-index 200
            right 0
            top 0
            height 100%
            width  1px
            background-color gray




      .rightContent_wrap
        position relative
        .imgDiv
          width 5.28rem
          height 1.92rem
          margin-bottom 0.3rem
          position absolute
          top 0
          img
            width 100%
            height 100%
            margin-top 0.3rem

        .rightContent
          padding-top 2.5rem
          background-color #fff
          display flex
          flex-wrap wrap
          margin-left 0.3rem
          .item1
            width 1.44rem
            height 2.16rem
            //background-color gray
            margin-right 0.42rem
            margin-bottom 0.42rem
            .item3
              div
                text-align center
                font-size 0.26rem
              img
                width 1.44rem
                height 1.44rem
          .item2
            margin-top 0.3rem
            .up
              .chuangpin
                bottom-border-1px(gray)
                width 5.28rem
                height 0.5rem
                margin-bottom 0.2rem
              .jiaju
                display flex
                flex-wrap wrap
                li
                  width 1.44rem
                  height 2.16rem
                  margin-right 0.36rem
                  img
                    width 1.44rem
                    height 1.44rem
                    margin-bottom 0.2rem



</style>
