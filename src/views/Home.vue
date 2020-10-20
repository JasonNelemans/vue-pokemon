<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
export default {
  name: 'home',
  mounted: function() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151%27", {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(allPokemon => {
        allPokemon.results.forEach(pokemon => this.fetchPokemonData(pokemon))
      });
  },
  methods: {
    fetchPokemonData(pokemon: any) {
      const url = pokemon.url;
      fetch(url, { method: "get"})
        .then(response => response.json())
        .then(pokeData => console.log('pokeData: ', pokeData))
    }
  }
}
</script>
