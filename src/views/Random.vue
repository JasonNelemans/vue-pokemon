<template>
  <PokemonDetail v-if="id" :id="id" />
</template>

<script lang="ts">
  import PokemonDetail from "@/components/PokemonDetail.vue"

  export default {
    components: {
      PokemonDetail
    },
    data() {
      return {
        id: null as null | string
      }
    },
    mounted() {
      this.randomizeId();
    },
    methods: {
      randomizeId() {
        const randomId = Math.floor(Math.random() * 1050) + 1  
        this.id = `${randomId}`;
      }
    }
  }
</script>