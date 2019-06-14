<template>
  <section>
    <div v-if="userLoggedIn">User logged in</div>
    <div v-else>
      Not logged In
      <button v-on:click="requestToken">Log In</button>
    </div>
  </section>
</template>


<script>
import { URLSearchParams } from "url";
export default {
  methods: {
    async requestToken() {
      console.log("hola");
      await this.$store.dispatch("requestToken");
      //console.log(result);
      window.location.href = `https://www.themoviedb.org/authenticate/${
        this.$store.state.token
      }?redirect_to=${location.protocol}//${location.host}/profile`;
    },
    async requestPermission() {
      console.log("AQUI", this.$route.query.request_token);
      const userToken = this.$route.query.request_token;
      if (userToken && !this.userLoggedIn) {
        await this.$store.dispatch("requestSessionId", userToken);
        localStorage.setItem("session_id", id);
        console.log("AQUI2", this.$store.getters.getSession);
      }
    }
  },

  created() {
    if (!this.$store.getters.getSession) {
      this.requestPermission();
    }
  },
  mounted() {
    this.$store.dispatch("setPopularFilms");
  },
  computed: {

      return this.$store.state.sessionId || null;
    }
  }
};
</script>

<style>
</style>
