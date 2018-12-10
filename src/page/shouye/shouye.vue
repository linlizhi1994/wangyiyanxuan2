<template>
  <div class="shouye">
    <div>
      <div class="header_wrap">
        <header class="header">
          <h2>网易严选</h2>
           <span class="iconfont icon-search searchImage" ></span>
          <input/>
          <a class="login">{{users._id?'已登录':'登录'}}</a>
        </header>
      </div>
      <div class="nav_wrap">
        <ul class="nav">
          <li class="on">推荐</li>
          <li>居家</li>
          <li>推荐地方</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>居家</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
        </ul>

        <span class="wrap_span">
            <span class="upSpan" :class="{rote:isShow}" @click="handleisShow">
              <span class="iconfont icon-iconfontjiantou inSpan"></span>
            </span>
        </span>

        <div class="floatNav" v-show="isShow" >
          <div class="pinDao">全部频道</div>
          <ul class="ulNav">
            <li v-for="(item,index) in shouyeData.cateList">{{item.name}}</li>

          </ul>
        </div>
       </div>
      <div class="content">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in lunbotuList" :key="item.id">
                <img class="img" :src="item.picUrl">
              </div>
              <!--<div class="swiper-slide"><img class="img" src="./img/5a2289149a59ca24ef2256674542e4cb.jpg"></div>
              <div class="swiper-slide"><img class="img" src="./img/089fdc9bfdc75ccfbe9c349d0096804b.jpg"></div>
              <div class="swiper-slide"><img class="img" src="./img/a209d8ec4efb502140d086773cd04c76.jpg"> </div>
              <div class="swiper-slide"><img class="img" src="./img/fda101d5e6beeb56d0ff8245139ff30b.jpg"> </div>-->
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        <div class="category">
          <ul class="promise">
            <li>
              <span></span>
              <a>网易自营品牌</a>
            </li>
            <li>
              <span></span>
              <a>30天无忧退货</a>
            </li>
            <li>
              <span></span>
              <a>48小时快速退款</a>
            </li>
          </ul>

          <ul class="categoryUl">
            <li v-for="(items,index) in lunbotuUpData" :key="index">
              <img :src="items.picUrl">
              <span>{{items.text}}</span>
            </li>

            <!--<li>
              <img src="./img2/31831ada59dc10319cba195620ed9ed0.png">
              <span>居家</span>
            </li>

            <li>
              <img src="./img2/db5e2ce8c66f7db3f4282ecb24a64236.png">
              <span>电器</span>
            </li>
            <li>
              <img src="./img2/2fde77529e90a26427d1c02faa3bfbf6.png">
              <span>电器</span>
            </li>

            <li>
              <img src="./img2/31831ada59dc10319cba195620ed9ed0.png">
              <span>居家</span>
            </li>

            <li>
              <img src="./img2/db5e2ce8c66f7db3f4282ecb24a64236.png">
              <span>电器</span>
            </li>
            <li>
              <img src="./img2/2fde77529e90a26427d1c02faa3bfbf6.png">
              <span>电器</span>
            </li>

            <li>
              <img src="./img2/31831ada59dc10319cba195620ed9ed0.png">
              <span>居家</span>
            </li>

            <li>
              <img src="./img2/db5e2ce8c66f7db3f4282ecb24a64236.png">
              <span>电器</span>
            </li>
            <li>
              <img src="./img2/2fde77529e90a26427d1c02faa3bfbf6.png">
              <span>电器</span>
            </li>-->
          </ul>
          <img class="gifImg" src="./img2/15435895031254332.gif">
        </div>

        <div class="red_bg">
          <div class="discount">
              <ul>
                <li><img src="./img3/15435898807204448.png"></li>
                <li><img src="./img3/15435899647084496.png"></li>
                <li><img src="./img3/15435900236034498.png"></li>
                <li><img src="./img3/15438948939222563.png"></li>
              </ul>
          </div>

          <div class="dinglei">
            <img src="./img3/b36b6e2c6132b5980c047005f7520795.png">
          </div>

          <div class="welfare">
            <div class="welfare_item">
              <div class="describe">
                <div>12.12爱吃福利社</div>
                <div>暖冬没事汇聚</div>
              </div>

              <img src="./img4/362a8249b48d91d99604680b5471b507.png">
              <img src="./img4/855a0c57ab058ee6c41c1b11a6e594d4.png">
            </div>

            <div class="welfare_item">
              <div class="describe">
                <div>12.12爱吃福利社</div>
                <div>暖冬没事汇聚</div>
              </div>

              <img src="./img4/c24d528dfc4c043cad7cdb560d2b7764.png">
              <img src="./img4/04763003a311710e58da2539bf573949.png">
            </div>


            <div class="welfare_item">
              <div class="describe">
                <div>12月必买毫无好物</div>
                <div>暖冬没事汇聚</div>
              </div>

              <img src="./img4/abf8da82c5363f6b31bfdc2de8caa496.png">
              <img src="./img4/c24d528dfc4c043cad7cdb560d2b7764.png">
            </div>

            <div class="welfare_item">
             <div class="describe">
               <div>12.12爱吃福利社</div>
               <div>暖冬没事汇聚</div>
             </div>
              <img src="./img4/d36dc48ac4456816e60f1592f02e034d.png">
              <img src="./img4/e1d2f0b529eddc9b645997d0f16e9aca.png">
            </div>
          </div>

        </div>

        <div class="customize">
            <div class="personal">
            私人定制
            </div>


          <!--<div class="swiper-container2">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img class="img" src="./img/1d66a50452354fa28b045853c078cbe3.jpg"> </div>
              <div class="swiper-slide"><img class="img" src="./img/5a2289149a59ca24ef2256674542e4cb.jpg"></div>
              <div class="swiper-slide"><img class="img" src="./img/089fdc9bfdc75ccfbe9c349d0096804b.jpg"></div>
              <div class="swiper-slide"><img class="img" src="./img/a209d8ec4efb502140d086773cd04c76.jpg"> </div>
              <div class="swiper-slide"><img class="img" src="./img/fda101d5e6beeb56d0ff8245139ff30b.jpg"> </div>
            </div>

            <div class="swiper-pagination2"></div>
          </div>-->
         <div class="swiper-container2">
            <div class="swiper-wrapper" >
                 <div class="swiper-slide">
                   <div class="imgDiv">
                     <img src="./img5/4b72ba8cdcf9eccd3ed1e6be35b09ab8.png">
                     <span>对方是否胜多负少是发生发顺丰</span>
                   </div>
                  <div class="imgDiv">
                   <img src="./img5/6c089b604b114b4e330da4766722bade.png">
                   <span>是对方是否都是</span>
                  </div>

                <div class="imgDiv">
                  <img src="./img5/c5169878eeb47740aaba2fd6e1a36ecf.png">
                  <span>上的说法是否</span>
                </div>
                </div>

              <div class="swiper-slide">
                <div class="imgDiv">
                  <img src="./img5/4b72ba8cdcf9eccd3ed1e6be35b09ab8.png">
                  <span>是的冯绍峰是</span>
                </div>
                <div class="imgDiv">
                  <img src="./img5/6c089b604b114b4e330da4766722bade.png">
                  <span>是对方是否都是</span>
                </div>

                <div class="imgDiv">
                  <img src="./img5/c5169878eeb47740aaba2fd6e1a36ecf.png">
                  <span>上的说法是否</span>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="imgDiv">
                  <img src="./img5/4b72ba8cdcf9eccd3ed1e6be35b09ab8.png">
                  <span>是的冯绍峰是</span>
                </div>
                <div class="imgDiv">
                  <img src="./img5/6c089b604b114b4e330da4766722bade.png">
                  <span>是对方是否都是</span>
                </div>

                <div class="imgDiv">
                  <img src="./img5/c5169878eeb47740aaba2fd6e1a36ecf.png">
                  <span>上的说法是否</span>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="imgDiv">
                  <img src="./img5/4b72ba8cdcf9eccd3ed1e6be35b09ab8.png">
                  <span>是的冯绍峰是</span>
                </div>
                <div class="imgDiv">
                  <img src="./img5/6c089b604b114b4e330da4766722bade.png">
                  <span>是对方是否都是</span>
                </div>

                <div class="imgDiv">
                  <img src="./img5/c5169878eeb47740aaba2fd6e1a36ecf.png">
                  <span>上的说法是否</span>
                </div>
              </div>

              </div>
            <div class="swiper-pagination2"></div>
          </div>

         <!-- <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img class="img" src="./img/1d66a50452354fa28b045853c078cbe3.jpg"> </div>
              <div class="swiper-slide"><img class="img" src="./img/5a2289149a59ca24ef2256674542e4cb.jpg"></div>
              <div class="swiper-slide"><img class="img" src="./img/089fdc9bfdc75ccfbe9c349d0096804b.jpg"></div>
              <div class="swiper-slide"><img class="img" src="./img/a209d8ec4efb502140d086773cd04c76.jpg"> </div>
              <div class="swiper-slide"><img class="img" src="./img/fda101d5e6beeb56d0ff8245139ff30b.jpg"> </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>-->

        </div>

        <div class="LimitedTime">
        <div class="up">
          <span class="shoping">限时购</span>
          <span class="time">44 444 444</span>
          <a class="more">更多&gt</a>
        </div>

          <div class="down">
            <ul>
              <li>
              <img src="./img6/0f69403e85a27a34d4df162391d13e31.png">
              <span>￥99</span>
                <s>110</s>
            </li>
              <li>
                <img src="./img6/dec2804e83f36f6cc2ad7b28d49b8aff.png">
                <span>￥88</span>
                <s>790</s>
              </li>

              <li>
                <img src="./img6/0f69403e85a27a34d4df162391d13e31.png">
                <span>￥99</span>
                <s>110</s>
              </li>
              <li>
                <img src="./img6/dec2804e83f36f6cc2ad7b28d49b8aff.png">
                <span>￥88</span>
                <s>790</s>
              </li>

              <li>
                <img src="./img6/0f69403e85a27a34d4df162391d13e31.png">
                <span>￥99</span>
                <s>110</s>
              </li>
              <li>
                <img src="./img6/dec2804e83f36f6cc2ad7b28d49b8aff.png">
                <span>￥88</span>
                <s>790</s>
              </li>
            </ul>
          </div>
        </div>

        <div class="newProducts">
          <div class="up">
            <span class="newProduct">新品首发</span>

            <a class="more">更多<span>&gt</span></a>
          </div>

          <div class="down">
            <ul>
              <li>
                <img src="./img6/21712dc8c9b39049c0731613905ca56a.png">
                <span class="news">压榨葵花籽油5升￥58</span>
                  <span class="promotion">美食狂欢</span>
              </li>
              <li>
                <img src="./img6/675dbc5080b33299d5b28a2009fc5d0a.png">
                <span class="news">纯牛奶一万和杀毒￥88</span>
                <span class="promotion">限时购</span>
              </li>
              <li>
                <img src="./img6/675dbc5080b33299d5b28a2009fc5d0a.png">
                <span class="news">纯牛奶一万和杀毒￥88</span>
                <span class="promotion">限时购</span>
              </li>
              <li>
                <img src="./img6/675dbc5080b33299d5b28a2009fc5d0a.png">
                <span class="news">纯牛奶一万和杀毒￥88</span>
                <span class="promotion">限时购</span>
              </li>

              <li>
                <img src="./img6/675dbc5080b33299d5b28a2009fc5d0a.png">
                <span class="news">纯牛奶一万和杀毒￥88</span>
                <span class="promotion">限时购</span>
              </li>
              <li>
                <img src="./img6/675dbc5080b33299d5b28a2009fc5d0a.png">
                <span class="news">纯牛奶一万和杀毒￥88</span>
                <span class="promotion">限时购</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
    <div :class="{mask:isShow}" @click="handleisShow"></div>
  </div>

</template>

<script>
  import BScroll from "better-scroll"
  import "swiper/dist/css/swiper.min.css"
  import Swiper from "swiper"


  import {mapState} from 'vuex'
    export default {
          name: "shouye",
      data(){
            return{
            isShow:false
            }
      },
      mounted(){

        this.$store.dispatch("getlunbotu")

        this.$store.dispatch('getShouyeData')
        new BScroll('.nav_wrap',{
           //scrollY:false,
          click:true,
          scrollX:true,

        })


        new Swiper(".swiper-container2", {//new Swiper要在页面渲染以后才能New!!!
          loop: true,
          // 如果需要分页器
          //click:true,
    /*   autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },*/
          pagination: {
            el: '.swiper-pagination2',
          },
        })
      },
      computed:{
        ...mapState(['lunbotuList','lunbotuUpData','users',"shouyeData"])
      },
      methods:{
        handleisShow(){
             this.isShow = !this.isShow
            //document.querySelector(".inSpan").style.transform = "rotateZ(45deg)"
           }
       },
      watch:{
        lunbotuList(){
          this.$nextTick(()=>{
            new Swiper(".swiper-container", {//new Swiper要在页面渲染以后才能New!!!
              loop: true,
              // 如果需要分页器
              //click:true,
              autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
              pagination: {
                el: '.swiper-pagination',
              },
            })
          })
        }
      }


           }

</script>

<style scoped lang="stylus">
   @import "../../common/stylus/mixins.styl"
  .shouye
    width 100%
    padding-top 1.48rem
    padding-bottom 1rem
    background-color yellow
    .content
      width 100%
      background-color #F4F4F4
      .swiper-container

        .swiper-wrapper
          display flex
          .swiper-slide

            .img
              width 7.5rem
              height 4rem
      .category
        background-color #FFEDDB
        .promise
          padding-top 0.2rem
          padding-bottom 0.3rem
          font-size 0.28rem
          color #B4282D
          display flex
          justify-content space-around
        .categoryUl
          display flex
          flex-wrap wrap

          li
            //background-color red
            width 1.1rem
            padding 0 0.2rem
            padding-bottom 0.3rem
            img
              width 1.1rem
              height 1.1rem
            span
              position relative
              left 0.2rem
              top 0.2rem
        .gifImg
          width 7.5rem
          height 3.3rem
      .red_bg
        background-color #B7030A
        .discount

          ul
            display flex
            flex-wrap wrap

            li
              height 2.03rem
              width 3.75rem
              &:nth-child(3)
                position relative
                left 0.1rem
              &:nth-child(4)
                position relative
                right 0.1rem
              img
                width 100%
                height 100%
        .dinglei
          margin-top 0.1rem
          img
            width 7.5rem
            height 1.59rem
        .welfare
          display flex
          flex-wrap wrap
          .welfare_item
            width 3.43rem
            height 2.64rem
            background-color #FFF9EB
            margin-left 0.3rem
            margin-bottom 0.07rem
            &:nth-child(2)
              margin-left 0.07rem
            &:nth-child(4)
              margin-left 0.07rem
            .describe
              margin-top 0.34rem
              margin-left 0.32rem
              div
                margin-bottom 0.1rem
            img
              width 1.5rem
              height 1.5rem
      .customize
        margin-top 0.22rem
        .personal
          background-color white
          padding-left 0.32rem
          box-sizing border-box
          font-size 0.36rem
          line-height 1rem
          width 7.5rem
          height 1rem
        .swiper-container2
          width 100%
          height 3.7rem
          overflow hidden
          background-color white
          .swiper-wrapper
            display flex
            .swiper-slide
              display flex
              width 7.5rem
              height 3.7rem
              .imgDiv
                margin-left 0.22rem
                width 2.16rem
                height 3.1rem
                img
                  width 2.16rem
                  //width 7.5rem
                  height 2.16rem
                  background-color #F4F4F4






      .LimitedTime
        background-color white
        margin-top 0.3rem
        .up
          line-height 1rem
          width 7.5rem
          height 1rem
          position relative
          .more
            display inline-block
            position absolute
            right 0.3rem
          .shoping
            margin-left 0.2rem

        .down

          ul
            display flex
            flex-wrap wrap
            li
              width 2.16rem
              height 2.99rem
              margin-left 0.25rem
              img
                width 100%
                height 2.16rem
                background-color #f4f4f4
              span
                margin-left 0.25rem

      .newProducts
        background-color white
        margin-top 0.3rem
        .up
          line-height 1rem
          width 7.5rem
          height 1rem
          position relative
          .more
            display inline-block
            position absolute
            right 0.3rem
          .newProduct
            margin-left 0.2rem

        .down

          ul
            display flex
            flex-wrap wrap
            li
              width 2.16rem
              height 3.34rem
              margin-left 0.25rem
              img
                width 100%
                height 2.16rem
                background-color #f4f4f4
              .news
                //margin-left 0.25rem
                display block
                font-size 0.13rem
                margin-bottom 0.15rem
              .promotion
                background-color #F48F18
                color white



    .nav_wrap
      width 100%
      .nav
        //width auto
        //display inline-block
        white-space nowrap
        line-height 0.6rem
        height 0.6rem
        position fixed
        top 0.88rem
        //display flex
        background-color white
        //flex-wrap wrap
        //justify-content space-around
        z-index 100
        font-size 0.3rem
        li
          display inline-block
          //width 0.88rem
          margin 0 0.3rem
          //margin-left 0.6rem
          height 0.6rem
          //float left
          //text-align center
          position relative
          &.on
            color red
            &::after
              content ''
              position absolute
              bottom 1px
              width 100%
              height 2px
              background-color red
              transform translateX(-100%)

      .wrap_span
         text-align center
         width 1.15rem
         height 0.5rem
         position fixed
         top 0.9rem
         right 0rem
         z-index 2001
         color gray
         background-color #fff
         line-height 0.5rem

        .upSpan
          //text-align center
          //width 1.15rem
          //height 0.5rem
          position fixed
          //top 0rem
          right 0.4rem
          z-index 2002
          //color gray
           //line-height 0.5rem
          &.rote
            transition all 0.5s
            transform rotate(180deg)

      .floatNav
        width 100%
        //height 1rem
        background-color #fff
        position fixed
        top 0.88rem
        z-index 2000
        .ulNav
          margin-top 0.4rem
          display flex
          flex-wrap wrap
          li
            padding 0.1rem 0
            width 1.5rem
            background-color #F4F4F4
            margin-left 0.3rem
            margin-bottom 0.38rem
            text-align center
        .pinDao
            font-size 0.32rem
            margin-top 0.1rem
            margin-left 0.3rem

    .header_wrap
       font-size 14px
       width 100%
       //height 0.88rem

      .header
        box-sizing border-box
        padding-left  0.3rem
        background-color white
        position fixed
        z-index 100
        left 0
        top 0
        width 100%
        height 0.88rem
        //display flex
        //justify-content space-around
        .searchImage
          float left
          position relative
          top 0.3rem
          left 0.4rem
          z-index 200
        h2
          line-height 0.88rem
          font-size 0.345rem
          float left
          color black
        input
          box-sizing border-box
          padding 0.05rem 0.1rem 0.05rem 0.4rem
          border-radius 0.1rem
          position relative
          top 0.16rem
          width 4.42rem
          height 0.56rem
          float left
          background-color #EDEDED
        .login
          position relative
          left 0.2rem
          line-height 0.88rem
          color red
          font-size 0.3rem
          border 1px solid red
          border-radius 0.1rem


    .mask
      width 100%
      height 100%
      position fixed
      top 0
      z-index 90
      background-color rgba(0,0,0,0.5)
</style>
