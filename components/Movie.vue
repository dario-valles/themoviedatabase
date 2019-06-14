<template>
  <nuxt-link :to="'/' + id">
    <article>
      <div class="title">{{title}}</div>
      <div class="description">{{description}}</div>
    </article>
  </nuxt-link>
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["title", "description", "id"]
});
</script>
