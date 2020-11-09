<template>
  <div class="categories">
    <h1>See all generations</h1>
    <div class="generations">
      <p v-for="(generation, index) in generations" :key="index">
       <router-link to="">{{ generation.name }}</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions, mapState } from 'vuex'

export default {
  name: "categories",
  computed: {
    ...mapState('categories', ['generations'])
  },
  mounted() {
    this.fetchGenerations();
  },
  methods: {
    ...mapActions('categories', ['fetchGenerations']),
  },
}
</script>

<style lang="scss">
  .generations {
    display: flex;

    p {
      margin: 10px;
    }

    p::first-letter {
      text-transform: capitalize;
    }
  }
</style>
