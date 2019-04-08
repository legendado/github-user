<template>
  <v-app id="inspire" dark>
    <home></home>
  </v-app>
</template>


<script>
import Home from "./components/Home";

export default {
  components: {
    Home
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
