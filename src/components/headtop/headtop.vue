<template>
    <div>
      <div class="head">
        <span class="iconfont icon-home" @click="handleC"></span>
        <span class="headContent">{{title}}</span>
        <span class="iconfont icon-search" @click="handleSearch"></span>
        <span class="iconfont icon-gouwuche"></span>
      </div>

    </div>
</template>

<script>
    export default {
        name: "headtop",
      props:["title"],
      methods:{
          handleC(){
            this.$router.replace('/shouye')
          },
        handleSearch(){
            this.$router.replace('/search')
        }

       }
    }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .head
    bottom-border-1px(gray)
    width 100%
    height 0.88rem
    background-color #fff
    line-height 0.88rem
    position fixed
    top 0
    z-index 200
    .headContent
      margin-left 2.2rem
      margin-right 1.5rem
      font-size 0.4rem
    .icon-home
      margin-left 0.2rem
      font-size 0.48rem
    .icon-search
      font-size 0.48rem
    .icon-gouwuche
      font-size 0.48rem

</style>
