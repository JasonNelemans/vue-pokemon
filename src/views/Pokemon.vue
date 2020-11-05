<template>
  <PokemonDetail v-if="id" :id="id" />
</template>

<script lang="ts">
  import PokemonDetail from "@/components/PokemonDetails/PokemonDetail.vue"

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
      this.fetchId();
    },
    methods: {
      fetchId(): any {
        const id = this.$route.params.id;
        this.id = id;
      }
    }
  }
</script>