import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songs: [],
    currentSong: null
  },
  mutations: {
    SET_SONGS(state, payload) {
      state.songs = payload;
    }
  },
  actions: {
    fetchSongs({commit}) {
      axios({
        method: "get",
        url: "https://orangevalleycaa.org/api/music",
        params: {
          order: "name"
        }
      })
        .then(response => (commit("SET_SONGS", response.data)))
        .catch(error => console.log(error));
      }
  }
})