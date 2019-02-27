<template>
  <v-app id="app">
    <v-toolbar height="70" app>
      <v-toolbar-title class="display-1">Movies App</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-layout row wrap>
        <SearchTerm v-on:searched="searchTerm"/>
        <AddToList v-on:added="addToList"/>
      </v-layout>
        <Movies v-bind:movies="list"/>
    </v-content>
  </v-app>
</template>

<script>
    import Movies from './components/Movies';
    import AddToList from './components/AddToList';
    import SearchTerm from './components/SearchTerm';

    export default {

        name: 'app',
        components: {
            Movies,
            AddToList,
            SearchTerm
        },

        computed: {
            list() {
                return this.$store.state.list
            }
        },
        methods: {
            addToList(movie) {
                this.$store.dispatch('addToList', movie)
            },
            searchTerm(term) {
                this.$store.dispatch('fetchMovies', term)
            }
        }

    }
</script>

<style>
  #app {

  }
</style>
