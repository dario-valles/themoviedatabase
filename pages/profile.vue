<template>
  <section>
    <div v-if="userLoggedIn">
      <h2
        class="title is-2"
      >Welcome {{userDetails.name || userDetails.username}}, your id is {{userDetails.id}}</h2>
      <div>
        <h3 class="title is-3">Your lists are:</h3>
        <div class="list is-hoverable">
          <a class="list-item" v-for="list in userLists" :key="list.id">{{list.name}}</a>
        </div>
      </div>
      <div>
        <h3 class="title is-3">Your favorites Movies Are:</h3>
        <div class="columns is-multiline">
          <Movie
            v-for="movie in userFavorites"
            :key="movie.id"
            :title="movie.title"
            :image="movie.backdrop_path"
            :id="movie.id"
          />
        </div>
      </div>
    </div>
    <div v-else>Please login to see your profile</div>
  </section>
</template>

<script>
import { URLSearchParams } from "url";
import Movie from "@/components/Movie";

export default {
  components: {
    Movie
  },

  methods: {
    async requestPermission() {
      const userToken = this.$route.query.request_token;
      if (userToken && !this.$store.getters.getLoggedIn) {
        await this.$store.dispatch("requestLoggedIn", userToken);
        await this.$store.dispatch("setUserDetails");
        await this.$store.dispatch("setUserFavorites");
        await this.$store.dispatch("setUserLists");
      }
    }
  },

  beforeMount() {
    if (!this.$store.getters.getLoggedIn) {
      this.requestPermission();
    }
  },

  computed: {
    userLoggedIn() {
      return this.$store.getters.getLoggedIn;
    },

    userDetails() {
      return this.$store.getters.getUserDetails;
    },

    userFavorites() {
      return this.$store.getters.getUserFavorites;
    },

    userLists() {
      return this.$store.getters.getUserLists;
    }
  }
};
</script>
