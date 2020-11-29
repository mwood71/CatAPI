<template>
    <div class="container">

        <div class="m-5" v-if="!loading">
            <h1 style="color:#05386B">Loading.....</h1>
        </div>

        <div v-if="!show && loading">
            <h4 style="color:#EDF5E1">Click on the button to display an adorable picture of a cat with a thought provoking quote to match!</h4><br/>
            <button style="background-color:#05386B" v-if="!show" @click="random()" type="button" class="btn text-white" >
            Click! 
            </button>

        </div>
        


        <div v-if="show" class="row text-center m-5">
            <div class="col-4 offset-4">
                <h2 style="color:#05386B">{{quote.quote}}</h2><br/>
                <img class="img-responsive" :src="randomImage.url" alt="cat-photo">
                <button style="background-color:#05386B" @click="back()" class="btn text-white m-5">Try Again!</button>
            </div>
        </div>

    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex'

    export default {
        name: 'Quiz',
        data() {
            return {
                show: false,
                loading: false
            }
        },
        computed: {

            ...mapState(['images']),
            ...mapState(['randomImage']),
            ...mapState(['quote'])


        },
        methods: {
            random() {
                var randomnumber = Math.floor(Math.random() * (50));
                this.$store.dispatch('random', this.images[randomnumber].id)
                this.$store.dispatch('quotes')
                setTimeout(() => this.show = true, 2000);
            },
            back(){

                this.show = false

            }
        },
        mounted(){
            setTimeout(() => this.loading = true, 2000);
        }


    }
</script>

<style scoped>
    img {
        width: 400px;
        height: auto
    }
</style>