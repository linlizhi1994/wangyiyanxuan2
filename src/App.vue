<template>
  <div id="app">
    <router-view></router-view>
  <foodnav v-show="$route.meta.isShow"></foodnav>
  </div>
</template>

<script>

import foodnav from './components/foodnav/foodnav'
export default {
  name: 'App',
  components: {
    foodnav
  },
  mounted(){
    this.$store.dispatch("getUserId")
  }
}
</script>

<style>

</style>
