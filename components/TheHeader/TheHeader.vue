<template>
  <header>
    <nav class="navbar" role="navigation">
      <div class="navbar-start">
        <nuxt-link to="/" class="navbar-link title is-4">Popular Movies</nuxt-link>
        <nuxt-link v-if="userLoggedIn" to="/profile" class="navbar-link title is-4">Profile</nuxt-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <button
              v-if="userLoggedIn"
              class="button is-primary title is-4"
              v-on:click="removeSession"
            >
              <strong>LogOff</strong>
            </button>
            <button
              v-if="!userLoggedIn"
              class="button is-primary title is-4"
              v-on:click="requestToken"
            >
              <strong>Log in</strong>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    async requestToken() {
      await this.$store.dispatch("requestToken");
      window.location.href = `https://www.themoviedb.org/authenticate/${
        this.$store.getters.getToken
      }?redirect_to=${location.protocol}//${location.host}/profile`;
    },
    removeSession() {
      this.$store.commit("setLoggedIn", false);
      this.$router.push("/");
    }
  },

  computed: {
    userLoggedIn() {
      return this.$store.getters.getLoggedIn;
    }
  }
};
</script>
