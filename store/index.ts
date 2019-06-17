import vuex from 'vuex';
import MovieDB from '../../Erika/themoviedb';
import { User } from './models/UserModel';
import { Lists, Movies, Movie } from './models/MovieModel';

const moviesAPI = new MovieDB(process.env.movieDBKey);

const createStore = () => {
  return new vuex.Store({
    state: {
      popularFilms: <Movies>null,
      movie: <Movie>null,
      token: <string>'',
      loggedIn: <boolean>false,
      User: <User>{
        avatar: null,
        id: null,
        iso_639_1: null,
        iso_3166_1: null,
        name: null,
        include_adult: null,
        username: null
      },
      userFavorites: <Movies>null,
      userLists: <Lists>null
    },
    mutations: {
      setPopularFilms(state, movies) {
        state.popularFilms = movies;
      },
      setMovieDetails(state, movie) {
        state.movie = movie;
      },
      setToken(state, token) {
        state.token = token;
      },
      setLoggedIn(state, loggedIn) {
        state.loggedIn = loggedIn;
      },
      setUserDetails(state, userDetails) {
        state.User = userDetails;
      },
      setUserFavorites(state, userFavories) {
        state.userFavorites = userFavories;
      },
      setUserLists(state, userLists) {
        state.userLists = userLists;
      }
    },
    actions: {
      async setPopularFilms({ commit }) {
        const pouplarMovies = await moviesAPI.discoverPopularMovies();
        commit('setPopularFilms', pouplarMovies.results);
      },

      async setMovieDetails({ commit }, id: number) {
        const movie = await moviesAPI.getMovieDetails(id);
        commit('setMovieDetails', movie);
      },

      async setFavorite({ commit }, data) {
        await moviesAPI.favoriteMovie(data.movieId, data.add);
      },

      async requestToken({ commit }) {
        const token = await moviesAPI.requestToken();
        commit('setToken', token);
      },

      async requestLoggedIn({ commit }, token) {
        const userSession = await moviesAPI.requestSession(token);
        if (userSession) commit('setLoggedIn', true);
      },

      async setUserDetails({ commit }) {
        const userDetails = await moviesAPI.getUserDetails();
        commit('setUserDetails', userDetails);
      },

      async setUserFavorites({ commit }) {
        const userFavories = await moviesAPI.getUserFavorites();
        commit('setUserFavorites', userFavories.results);
      },

      async setUserLists({ commit }) {
        const userLists = await moviesAPI.getUserLists();
        commit('setUserLists', userLists.results);
      }
    },
    getters: {
      getPopularFilms(state) {
        return state.popularFilms;
      },
      getMovie(state) {
        return state.movie;
      },
      getToken(state) {
        return state.token;
      },
      getLoggedIn(state) {
        return state.loggedIn;
      },
      getUserDetails(state) {
        return state.User;
      },
      getUserFavorites(state) {
        return state.userFavorites;
      },
      getUserLists(state) {
        return state.userLists;
      }
    }
  });
};

export default createStore;
