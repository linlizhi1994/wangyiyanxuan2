<template>
  <div id="app">
    <router-view></router-view>
  <foodnav></foodnav>
  </div>
</template>

<script>

import foodnav from './components/foodnav/foodnav'
export default {
  name: 'App',
  components: {
    foodnav
  }
}
</script>

<style>

</style>
