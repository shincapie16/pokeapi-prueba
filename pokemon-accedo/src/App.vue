<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  
  beforeCreate(){
    this.$store.commit('initializeStore')
    
    const token = this.$store.state.token

    if (token){
      axios.defaults.headers.common['Authorization'] = 'Token ' + token
    }
    else{
      axios.defaults.headers.common['Authorization'] = ''
    }
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.cdnfonts.com/css/pokemon-solid');

  body {
    margin: 0;
    padding: 0;
  }
</style>