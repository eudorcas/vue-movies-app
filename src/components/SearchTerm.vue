<template>
  <v-flex xs12 sm6>
    <v-card class="ma-3 pa-2">
      <v-card-title class="subheading">Search movies</v-card-title>
      <v-card-actions class="ma-2">
        <v-text-field class="mr-4" v-model="term" type="text" label="movie"></v-text-field>
        <v-btn v-on:click="onClick">Search</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>

</template>

<script>
    export default {
        name: 'SearchTerm',
        data() {
            return {
                term: ''
            }
        },
        methods: {
            onClick() {
                this.$emit('searched', this.term);
                this.term = '';
            }

        }
    }

</script>

<style>

</style>