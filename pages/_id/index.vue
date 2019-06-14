<template>
  <div class="subtitle">
    <h1>TITLE</h1>
    <p>{{ movie.title }}</p>
    <img :src="'https://image.tmdb.org/t/p/w780' + movie.backdrop_path">
  </div>
</template>

<script>
import MovieDB from "../../../Erika/themoviedb";

const moviesAPI = new MovieDB("e10f87830d1d7548b99f637c6b76133b");

export default {
  async asyncData(context) {
    const movie = await moviesAPI.getMovieDetails(context.params.id);
    return { movie };
  }
};
</script>


<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
