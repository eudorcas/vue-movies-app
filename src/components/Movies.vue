<template>
  <v-layout row wrap class="ma-5">
    <v-flex xs12 sm6 md4 lg3 v-bind:key="index" v-for="(movie, index) in movies">
      <v-card class="ma-2">
        <v-card-title>{{movie.title}}</v-card-title>
        <v-img :src="movie.image" alt="poster"></v-img>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

    export default {
        name: "Movies",

        props: {
            movies: {
                type: Array
            }
        }
    }
</script>

<style>

</style>
