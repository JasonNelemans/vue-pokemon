<template>
  <div id="app">
    <div id="content">
      <Navbar />
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Footer,
    Navbar
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0 auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#content {
  flex-grow: 1;
}
</style>
