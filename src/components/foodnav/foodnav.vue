<template>
    <div class="footer_guide">
      <a href="javascript:;" class="guide_item" :class="{on:$route.path === '/shouye'}">
      <span class="item_icon">
        <i class="iconfont icon-1212"></i>
      </span>
        <span @click="goTo('/shouye')">首页</span>
      </a>

      <a href="javascript:;" class="guide_item " :class="{on:$route.path === '/category'}">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
        <span @click="goTo('/category')">分类</span>
      </a>

      <a href="javascript:;" class="guide_item " :class="{on:$route.path === '/shiwu'}">
      <span class="item_icon">
        <i class="iconfont icon-shu"></i>
      </span>
        <span @click="goTo('/shiwu')">实物</span>
      </a>

      <a href="javascript:;" class="guide_item " :class="{on:$route.path === '/shopcart'}">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
        <span @click="goTo('/shopcart')">购物车</span>
      </a>


      <a href="javascript:;" class="guide_item " :class="{on:$route.path === '/personal'}">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
        <span @click="goTo('/personal')">个人</span>
      </a>

    </div>
</template>

<script>
    export default {
        name: "foodnav",
      methods:{
        goTo(path){
        this.$router.replace(path)
        }
      }
    }
</script>

<style scoped lang="stylus">
  .footer_guide

    position fixed
    z-index 10
    left 0
    right 0
    bottom 0
    background-color white
    width 100%
    //height 50px
    height 1rem
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      //margin 5px
      margin 0.1rem
      color black
      &.on
        color red
      span
        font-size 0.24rem
        margin-top 0.04rem
        margin-bottom 0.04rem
        .iconfont
          font-size 0.44rem
          color red

</style>
