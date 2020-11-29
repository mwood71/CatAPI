<template>

  <div class="container mb-5">
    <h2 style="color:#05386B" class="display-2 mt-5">Cat Breeds</h2>
    <div v-if="show" class="row">

      <div v-for="(breed,index) in breeds" :key=index class="col-lg-4 col-md-4 col-xs-4 mt-5">
        <a style="color:#EDF5E1" class="title" @click="details(breed)">{{breed.name}}</a>
      </div>

    </div>

    <div v-if="!show" class="row">
      <div class="col-4 offset-4">
      <h2 style="color:#05386B">{{this.object.name}} (breed)</h2><br/>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>Description: </b> {{this.object.description}}</li>
        <li class="list-group-item"><b>Origin: </b> {{this.object.origin}}</li>
        <li class="list-group-item"><b>Temperament: </b> {{this.object.temperament}}</li>
        <li class="list-group-item"><b>Life-span: </b> {{this.object.life_span}}</li>

      </ul>
      <button style="background-color:#05386B" @click="exit()" class="btn text-white m-5">Go Back</button>
      </div>
    </div>

  </div>

</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'Breeds',


    data() {

      return {
        show: true,
        object: {}
      }
    },
    computed: {

      ...mapState(['breeds'])

    },
   
   
    methods: {
      details(object) {
        this.show = false
        this.object = object
        console.log(this.object)
      },
      exit() {
        this.show = true
      }
    }


  }
</script>

<style scoped>
  .title {
    text-decoration: underline;
  }

  a:hover {
    cursor: pointer;
  }
</style>>