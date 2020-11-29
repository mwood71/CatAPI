<template>
  <div class="container mb-4">

    <div class="m-5" v-if="condition2">
      <h1 style="color:#05386B">Loading.....</h1>
    </div>

    <div v-if="!condition2">

      <h2 style="color:#05386B" class="display-2 mt-5">Cat Images</h2>
      <div v-if="show" class="row">

        <div v-for="(image,index) in images" :key=index class="col-lg-4 col-md-4 col-xs-4 mt-5">
          <a @click="details(image)" class="thumbnail">
            <img class="img-responsive" :src="image.url" alt="cat-photo">

          </a>
        </div>

      </div>

      <div v-if="!show" class="row m-5">
        <div class="col-4 offset-4 text-center">

          <img class="image-fluid center single-image" :src="this.object.url" alt="cat-photo"><br />
          <button @click="exit()" class="btn btn-primary mt-5 mr-1">Go Back</button>

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
    name: 'Images',

    data() {

      return {

        show: true,
        object: {},
        loading: true

      }

    },

    computed: {

      ...mapState(['images']),
      ...mapState(['condition2'])

    },

    methods: {
      details(object) {
        this.show = false
        this.object = object
        console.log(this.object)
      },
      exit() {
        this.show = true
      },
      

    },
    mounted(){
        if (this.condition2){

          setTimeout(() => this.$store.dispatch('endLoad2'), 10000);


        }
        
    }


  }
</script>

<style scoped>
  img {
    width: 200px;
    height: auto
  }

  a:hover {
    cursor: pointer;
  }

  .single-image {
    width: 400px;
    height: auto
  }
</style>