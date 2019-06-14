<template>
  <nuxt-link :to="'/' + id">
    <article>
      <div>{{title}}</div>
      <img :src="'https://image.tmdb.org/t/p/w780' + image" :alt="title">
    </article>
  </nuxt-link>
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["title", "image", "id"]
});
</script>
