<template>

  <div class="container mt-5">

    <div class="col-lg-12 col-md-12 pt-3 p-5">


      <div v-if="!condition" class="row">
        <div v-for="(image,index) in images" :key="index" class="col-md-1"><img class="img-responsive" :src="image.url" alt=""></div>
        
      </div>

      <div style="color:#05386B" v-if="condition"><h1>Loading....</h1></div>
      <br />
      <h1 style="color:#05386B" class="m-3">Alex's Cat Page</h1>




    </div>

    <div class="row text-center mb-5">

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Images</h5>
            <p class="card-text">
              Come check out more images of some adorable cats!
            </p>
            <button type="button" style="background-color:#05386B" class="btn"><router-link class="text-white" to="/images">Images</router-link></button>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Breeds</h5>
            <p class="card-text">
              Want to learn more about your favorite breeds of cats? Come check this page out!
            </p>
            <button style="background-color:#05386B" type="button" class="btn"><router-link class="text-white" to="/breeds">Breeds</router-link></button>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Come on!</h5>
            <p class="card-text">
                Want to view some randomly chosen photos from the collection? 
            </p>
            <button style="background-color:#05386B" type="button" class="btn"><router-link class="text-white" to="/random">Random</router-link> </button>
          </div>
        </div>
      </div>

    </div>



  </div>

</template>

<script>

   import {
    mapState
  } from 'vuex'

  export default {
    name: 'Home',
    computed: {

      ...mapState(['images']),
      ...mapState(['condition'])

    },
    data(){

      return {

         loading: true,
         firstTime: true

      }

    },
     mounted(){
        if (this.condition){

          setTimeout(() => this.$store.dispatch('endLoad'), 10000);


        }
        
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Chivo&display=swap');

  button {
    background-color: #42b983;
    border: #42b983;
  }

  h1 {
    font-family: 'Chivo', sans-serif;
  }

  img{
    width:100px;
    height:100px;
  }
</style>