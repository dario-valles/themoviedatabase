import vuex from 'vuex'
import MovieDB from '../../Erika/themoviedb'
import { request } from 'http';

const moviesAPI = new MovieDB("e10f87830d1d7548b99f637c6b76133b");


// async asyncData(context) {
//   const movie = await moviesAPI.getMovieDetails(context.params.id);
//   return { movie };
// }


const createStore = () => {
  return new vuex.Store({
    state: {
      popularFilms: [],
      sessionId: '',
      token: ''
    },
    mutations: {
      setPopularFilms(state, movies) {
        state.popularFilms = movies
      },
      setToken(state, token) {
        state.token = token
      },
      setSessionId(state, sessionId) {
        state.sessionId = sessionId
      }
    },
    actions: {
      async setPopularFilms({ commit }) {
        const pouplarMovies = await moviesAPI.discoverPopularMovies()
        console.log(pouplarMovies)
        commit('setPopularFilms', pouplarMovies.results)
      },

      async requestToken({ commit }) {
        const token = await moviesAPI.requestToken()
        console.log(token)
        commit('setToken', token)
      },

      async requestSessionId({ commit }, session) {
        const userSession = await moviesAPI.requestSession(session)
        console.log('dentro del equest', userSession)
        commit('setSessionId', userSession)
      }

    },
    getters: {
      getPopularFilms(state) {
        return state.popularFilms
      },
      getToken(state) {
        return state.token
      },
      getSession(state) {
        return state.sessionId
      }
    }
  })
}

export default createStore;
