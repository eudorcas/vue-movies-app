<template>
  <v-flex xs12 sm6>
  <v-card class="ma-3 pa-2">
    <v-card-title class="subheading">Add new movie</v-card-title>
    <v-text-field class="ma-3" v-model="newMovie.title" label="title"></v-text-field>
    <v-text-field class="ma-3" v-model="newMovie.image" label="image url"></v-text-field>
    <v-btn class="ma-3" v-on:click="onClick">Add to List</v-btn>
  </v-card>
  </v-flex>
</template>

<script>
  export default {
    name: "AddToList",
    data() {
        return {
            newMovie: {}
        }
    },
      methods: {
        onClick() {
            this.$emit('added', this.newMovie);
            this.newMovie = {};
        }
      }
  }
</script>