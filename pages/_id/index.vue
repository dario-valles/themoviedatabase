<template>
  <div v-if="movie" class="subtitle">
    <h1 class="title is-1">{{ movie.title }}</h1>
    <p></p>
    <img :src="'https://image.tmdb.org/t/p/w780' + movie.backdrop_path">
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("setMovieDetails", this.$route.params.id);
  },
  computed: {
    movie() {
      return this.$store.getters.getMovie;
    }
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

.links {
  padding-top: 15px;
}
</style>
