<template>
  <div id="app">
    <div id="stretch">
        <Navbar />
        <div class="content">
          <router-view />
        </div>
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

#stretch {
  flex-grow: 1;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 115px;
  padding-bottom: 20px;
  width: calc(100% - 0px);
  min-height: 80vh;
  font-family: "Acme", arial;
  font-size: 1rem;
  font-weight: normal;
  background: linear-gradient(315deg, #3c3a3a 0%, #7f8c8d 74%);

  h1 {
    color: white;
  }
}
</style>
