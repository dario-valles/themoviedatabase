<template>
  <div class="column is-4">
    <article>
      <div>
        <h5 class="title is-5">
          {{title}}
          <span v-if="isFavorite" class="icon has-text-danger">❤</span>
        </h5>
      </div>
      <nuxt-link :to="'/' + id">
        <img :src="'https://image.tmdb.org/t/p/w780' + image" :alt="title">
      </nuxt-link>
    </article>
  </div>
</template>


<script>
export default {
  props: ["title", "image", "id"],

  computed: {
    isFavorite() {
      if (this.$store.getters.getLoggedIn) {
        const favorites = this.$store.getters.getUserFavorites;
        return favorites.some(fav => fav.id === this.id);
      }
    }
  }
};
</script>

