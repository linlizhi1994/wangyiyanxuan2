<template>
    <div class="search">
     <div class="head">
       <input class="input1" v-model="searchContent"/>
       <span>取消</span>
     </div>
      <div class="content">
        <ul class="ulList">
          <li v-for="item in searchList">{{item}}</li>
          <li>水电费</li>

        </ul>
      </div>
    </div>
</template>

<script>
  import {mapState} from "vuex"
  import {reqSearch} from "../../api/index"
    export default {
        name: "search",
        data(){
          return{
            searchContent:''
          }
      },
      watch:{
    /*   async searchContent(){
          let searchContent = this.searchContent
          let result = await reqSearch(searchContent)
          if(result.code === "200"){
            let data = result.data
            this.$store.commit("getSearchContent",{data})
           console.log(data)
         }
        }*/
        searchContent(){
          let content = this.searchContent
          this.$store.dispatch("getSearch",{keywordPrefix:content})
        }
     },
      computed:{
        ...mapState(['searchList'])
  }
    }
</script>

<style scoped lang="stylus">
  .search
    .head
      width 100%
      height 0.88rem
      background-color red
      .input1
        width 5rem
        background-color #F4F4F4
        margin-left 0.5rem
        padding 0.2rem 0.3rem
        margin-top 0.1rem
      span
        color black

    .content
      width 100%
      .ulList
        display flex
        flex-wrap wrap
        background-color green
        margin-left 0.3rem
        margin-right  0.3rem
        li
          background-color gray
          padding 0.1rem 0.2rem
          margin-top 0.3rem

</style>
