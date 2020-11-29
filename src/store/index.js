import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {

    images: [],
    breeds: [],
    randomImage: {},
    questions: [],
    quote: {},
    condition: true,
    condition2: true

  },
  mutations: {

    SET_IMAGES(state, images) {
      state.images = images;
    },
    SET_BREEDS(state, breeds) {
      state.breeds = breeds;
    },
    SET_RANDOM(state, randomImage) {
      state.randomImage = randomImage;
    },
    SET_QUESTIONS(state, questions) {
      state.questions = questions;
    },
    SET_QUOTE(state, quote) {
      state.quote = quote;
    },
    SET_CONDITION(state, condition) {
      state.condition = condition;
    },
    SET_CONDITION2(state, condition2) {
      state.condition2 = condition2;
    }

  },
  actions: {

    endLoad({commit}){

      let condition = false 
      commit('SET_CONDITION', condition)

    },
    endLoad2({commit}){

      let condition2 = false 
      commit('SET_CONDITION2', condition2)

    },

    

    loadData({
      commit
    }) {


      const headers = {
        'Content-Type': 'application/json',
        'x-api-key': 'd8ce4698-5f87-4520-ab04-e6848bd35d6e',
      };

      axios.get("https://api.thecatapi.com/v1/images/search?limit=60", headers)
        .then(response => {
          console.log(response)
          let images = response.data;
          commit('SET_IMAGES', images)


        })
        .catch(function (error) {
          console.log(error);
        })



    },
    loadBreeds({
      commit
    }) {


      const headers = {
        'Content-Type': 'application/json',
        'x-api-key': 'd8ce4698-5f87-4520-ab04-e6848bd35d6e',
      };

      axios.get("https://api.thecatapi.com/v1/breeds?limit=60", headers)
        .then(response => {
          let breeds = response.data;
          commit('SET_BREEDS', breeds)


        })
        .catch(function (error) {
          console.log(error);
        })

    },
    random({commit}, id) {


      const headers = {
        'Content-Type': 'application/json',
        'x-api-key': 'd8ce4698-5f87-4520-ab04-e6848bd35d6e',
      };

      axios.get("https://api.thecatapi.com/v1/images/" + id, headers)
        .then(response => {
          console.log(response)
          let randomImage = response.data;
          commit('SET_RANDOM', randomImage)


        })
        .catch(function (error) {
          console.log(error);
        })



    },

    quotes({commit}){

      axios.get("https://api.kanye.rest")
        .then(response => {
          console.log(response)
          let quote = response.data;
          commit('SET_QUOTE', quote)


        })
        .catch(function (error) {
          console.log(error);
        })

    }
    
    

  },
  modules: {



  }
})