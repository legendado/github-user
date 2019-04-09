<template>
  <v-content>
    <v-container fluid>
      <v-layout justify-center align-center row fill-height>
        <v-flex xs12 sm6 md3>
          <v-text-field color="white" box dark label="Put a github user..." v-model="user"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout justify-center align-center row>
        <div class="loading">
          <v-progress-linear
            :width="10"
            height="2"
            color="white"
            v-if="clicked"
            :indeterminate="true"
          ></v-progress-linear>
        </div>
      </v-layout>
      <v-layout justify-center align-center row>
        <v-btn outline color="white" @click="fetchUser">
          <v-icon>search</v-icon>
          <span>Search</span>
        </v-btn>
      </v-layout>
      <v-layout v-if="done" justify-center align-center>
        <v-card id="info">            
          <v-img :src="data.avatar_url" ></v-img>
          <h3>Login: {{ data.login }}</h3>
          <h3>
            URL:
            <a :href="data.html_url">Go on github</a>
          </h3>
          <h3>Repositories: {{ data.public_repos }}</h3>
          <h3>Created: {{ data.created_at }}</h3>
        </v-card>
      </v-layout>
      <v-snackbar
        color="error"
        absolute
        v-model="snackbar"
        :bottom="true"
        :left="true"
        :timeout="t"
      >
        {{ error }}
        <v-btn color="white" flat @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-container>
  </v-content>
</template>

<script>
import http from "../http";

export default {
  data() {
    return {
      user: "",
      clicked: false,
      error: null,
      done: false,
      data: null,
      snackbar: false,
      t: 6000
    };
  },
  methods: {
    async fetchUser() {
      this.data = null;
      this.done = false;
      this.error = null;
      this.clicked = true;

      setTimeout(() => {
        return http()
          .get(`/${this.user}`)
          .then(({ data }) => {
            this.data = data;
            this.clicked = false;
            this.done = true;
          })
          .catch(() => {
            this.error = `Cant find user.`;
            this.snackbar = true;
            this.clicked = false;
          });
      }, 1000);
    }
  }
};
</script>

<style scope>
.loading {
  width: 300px;
}

#info {
  padding: 10px;
  text-align: center;
  width: 300px;
  margin-top: 50px;
  border: 1px solid;
  border-color: white;
  border-radius: 10px;
}
</style>
