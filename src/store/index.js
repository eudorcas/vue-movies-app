import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import axios from 'axios';

Vue.use(Vuex);

const apiKey = 'd58fb664';

export default new Vuex.Store({
        state: {
            list: []
        },
        mutations: {
            addToList(state, payload) {
                state.list.push(payload.movie);
            },
            setMovies(state, payload) {
                state.list = payload.movies;
            }
        },
        actions: {
            addToList(store, payload) {
                store.commit({
                    type: 'addToList',
                    movie: payload
                })
            },
            async fetchMovies({commit}, term ) {
                const payload = await axios.get('https://omdbapi.com/?apikey=' + apiKey +'&s=' + term)
                    .then(res=> {
                        return res.data.Search.map(el => {
                            return {title: el.Title, image: el.Poster};
                        });

                    });
                commit({
                    type:'setMovies',
                    movies: payload
                })
            }

        },
        plugins: [createLogger()]

});




