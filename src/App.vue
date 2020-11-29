<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/images">Images</router-link> |
      <router-link to="/breeds">Breeds</router-link> |
      <router-link to="/random">Random</router-link> |
       

    </div>
    <router-view/>
  </div>
</template>

<script>

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {mapState} from 'vuex'

export default {
  name: 'App',
  computed: {

      ...mapState(['images'])

  },
   mounted() {

      this.$store.dispatch('loadData')
      this.$store.dispatch('loadBreeds')
    }
  
}
</script>

<style>
body{
  background-color: #42b983;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #05386B;
}

#nav a.router-link-exact-active {
  color: #EDF5E1;
}
</style>
