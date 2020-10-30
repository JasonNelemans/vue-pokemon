<template>
    <PokemonDetail v-if="id" :id="`${id}`" />
</template>

<script lang="ts">
  import PokemonDetail from "@/components/PokemonDetail.vue"

  export default {
    components: {
      PokemonDetail
    },
    data() {
      return {
        id: null as null | number
      }
    },
    mounted() {
      this.randomizeId();
    },
    methods: {
      randomizeId() {
        const randomId = Math.floor(Math.random() * 1050) 
        this.id = randomId;
      }
    },
  }
</script>
