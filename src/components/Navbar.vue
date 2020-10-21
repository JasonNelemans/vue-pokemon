<template>
  <div class="navbar">
    <router-link to="/">Home</router-link> |
    <router-link to="/categories">Categories</router-link> |
    <router-link to="/random">Randomizer</router-link>
  </div>
</template>

<style lang="scss">
.navbar {
  padding-top: 75px;
  border-bottom: 15px solid #222224;
  background-color: #f00000;
  text-align: center;
  position: fixed;
  width: 100%;

  a {
    font-weight: bold;
    color: #222224;

    &.router-link-exact-active {
      color: #f0f0f0;
    }
  }
}
</style>
