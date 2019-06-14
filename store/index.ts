import vuex from 'vuex'
import MovieDB from '../../Erika/themoviedb'

const moviesAPI = new MovieDB("e10f87830d1d7548b99f637c6b76133b");


// async asyncData(context) {
//   const movie = await moviesAPI.getMovieDetails(context.params.id);
//   return { movie };
// }


const createStore = () => {
  return new vuex.Store({
    state: {
      popularFilms: []
    },
    mutations: {
      setPopularFilms(state, movies) {
        state.popularFilms = movies
      }
    },
    actions: {
      async setPopularFilms({ commit }) {
        const pouplarMovies = await moviesAPI.discoverPopularMovies()
        console.log(pouplarMovies)
        commit('setPopularFilms', pouplarMovies.results)
      }

    },
    getters: {
      getPopularFilms(state) {
        return state.popularFilms
      }
    }
  })
}

export default createStore;
