<template>
  <div class="random">
    <h1>Pokemon page</h1>
  </div>
</template>

<script lang="ts">
  export default {
    name: "pokemon",
    data() {
      return {
        pokemon: {}
      }
    },
    mounted() {
      this.fetchPokemon();
    },
    methods: {
      fetchPokemon() {
        const id = this.$route.params.id
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        method: "get"
      })
        .then(response => {
          return response.json();
        })
        .then(pokemon => {
          this.pokemon = pokemon;
        })
        .catch(error => console.log("error: ", error));
      }
    }
  }
</script>