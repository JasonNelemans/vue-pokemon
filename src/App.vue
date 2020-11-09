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
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  height: inherit;
  display: flex;
  flex-direction: column;
}

#stretch {
  flex-grow: 1;
  background: linear-gradient(to bottom, #C0C0C0 0%, #B1B1B1 100%);
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 115px;
  padding-bottom: 20px;
  width: calc(100% - 0px);
  
  font-family: "Acme", arial;
  font-size: 1rem;
  font-weight: normal;

  h1 {
    color: white;
  }
}
</style>
