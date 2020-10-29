<template>
  <div class="home">
    <h1>Home</h1>
    <label for="types">Choose a type:</label>{{ '  ' }}
    <select v-model="selected">
      <option v-for="option in options" v-bind:value="option.value" :key="option.value">
        {{ option.text }}
      </option>
    </select>
    {{ '  ' }}
    <span>Selected: {{ selected }}</span> {{ '  ' }}
    <button @click="sortedPokemons = pokemons">Refresh</button>
    <PokemonList :pokemons="sortedPokemons" />
  </div>
</template>

<script lang="ts">
import PokemonList from '@/components/PokemonList.vue'

export default {
  name: "home",
  components: {
    PokemonList
  },
  data() {
    return {
      pokemons: [],
      sortedPokemons: [],
      types: ['grass', 'poison', 'fire', 'flying', 'water', 'bug'],
      selected: '-',
      options: [
        { text: 'Grass', value: 'grass' },
        { text: 'Poison', value: 'poison' },
        { text: 'Fire', value: 'fire' },
        { text: 'Flying', value: 'flying' },
        { text: 'Water', value: 'water' },
        { text: 'Bug', value: 'bug' },
      ],
    };
  },
  mounted: function() {
    this.fetchAllPokemon();
  },
  methods: {
    fetchPokemonData(pokemon: any) {
      const url = pokemon.url;
      fetch(url, { method: "get" })
        .then(response => response.json())
        .then((pokeData: any) => this.pokemons.push(pokeData))
        .then(() => this.sortById())
        .then(() => this.sortedPokemons = this.pokemons)
        .catch(error => console.log("error: ", error));
    },
    fetchAllPokemon() {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=12", {
        method: "get"
      })
        .then(response => {
          return response.json();
        })
        .then(allPokemon => {
          allPokemon.results.forEach((pokemon: any) =>
            this.fetchPokemonData(pokemon)
          );
        })
        .catch(error => console.log("error: ", error));
    },
    sortById() {
      this.pokemons.sort((a, b) => a.id - b.id);
    },
    sortPokemon() {
      this.sortedPokemons = [];
      this.pokemons.forEach(pokemon => {
        pokemon.types.forEach(type => {
          if(type.type.name === this.selected) {
            this.sortedPokemons.push(pokemon)
          }
        })
      })
    }
  },
  watch: {
    selected() {
      this.sortPokemon();
    },
  }
};
</script>

<style lang="scss" scoped>
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 25px;
    max-width: 800px;
    width: 100%;
    color: #fff;

    article {
      background: linear-gradient(to right top, #3d7dca, #306bb3, #225a9c, #134a86, #003a70);
      padding-top: 15px;
      text-align: center;
      text-transform: capitalize;
      border-radius: 5px;
      cursor: pointer;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
      border: 4px solid #FFCB05;

      h3 {
        margin: 0;
      }

      .type-list {
        display: inline-block;

        p {
          margin: 10px 5px 0px 5px;
        }
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
</style>
