<template>
  <div id="app">
    <div id="content">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/categories">Categories</router-link> |
        <router-link to="/random">Randomizer</router-link> |
        <router-link to="/pokemon">Pokemon</router-link>
      </div>
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer
  }
};
</script>

<style lang="scss">
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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
