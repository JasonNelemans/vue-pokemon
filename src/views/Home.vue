<template>
  <div class="home">
    <h1>Browse Pokemon List</h1>
    <div class="fetch-buttons">
      <button class="buttons" @click="changeApiUrl(dataObject.previous)">Previous</button>
      <button class="buttons" @click="changeApiUrl(dataObject.next)">Next</button>
    </div>
    <div class="selected">
      <div>
        <label for="types">Choose a type:</label>{{ '  ' }}
        <select v-model="selected">
          <option v-for="option in options" v-bind:value="option.value" :key="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
      <span>Selected: {{ selected }}</span>
      <button id="refresh" @click="refreshHandler">Refresh</button>
    </div>
    <PokemonList :pokemons="sortedPokemons" />
    <div v-if="sorting && sortedPokemons.length === 0" class="error-match">
      <h1>Sorry, no match found.</h1>
    </div>
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
      selected: '-',
      options: [
        { text: 'Bug', value: 'bug' },
        { text: 'Dark', value: 'dark' },
        { text: 'Dragon', value: 'dragon' },
        { text: 'Electric', value: 'electric' },
        { text: 'Fairy', value: 'fairy' },
        { text: 'Fighting', value: 'fighting' },
        { text: 'Fire', value: 'fire' },
        { text: 'Flying', value: 'flying' },
        { text: 'Ghost', value: 'ghost' },
        { text: 'Grass', value: 'grass' },
        { text: 'Ground', value: 'ground' },
        { text: 'Ice', value: 'ice' },
        { text: 'Normal', value: 'normal' },
        { text: 'Poison', value: 'poison' },
        { text: 'Psychic', value: 'psychic' },
        { text: 'Rock', value: 'rock' },
        { text: 'Steel', value: 'steel' },
        { text: 'Water', value: 'water' },
      ],
      types: [],
      dataObject: {},
      apiUrl: "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0",
      sorting: false
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
      this.pokemons = []
      fetch(this.apiUrl, {
        method: "get"
      })
        .then(response => {
          return response.json();
        })
        .then(allPokemon => {
          this.dataObject = allPokemon
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
      if(this.selected !== '-') {
        this.sorting = true;
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
    changeApiUrl(apiUrl: string) {
      if(apiUrl !== null) {
        this.apiUrl = apiUrl
        this.selected = '-'
      }
    },
    refreshHandler() {
      this.sortedPokemons = this.pokemons;
      this.selected = '-';
    }
  },
  watch: {
    selected() {
      this.sortPokemon();
    },
    apiUrl() {
      this.fetchAllPokemon();
    },
  }
};
</script>

<style lang="scss" scoped>
  .home {
    margin-bottom: 25px;
  }

  .fetch-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: center;
    margin-top: 15px;

    .buttons {
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: #f0f0f0;
        color: #222224;
        padding: 10px 20px;
        margin-bottom: 20px;
        font-size: 1.2rem;
        cursor: pointer;
        box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);
    }
  }

  .selected {
    margin: 15px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

    span {
      margin: 10px;
    }

    #refresh {
      margin: 0;
      width: 70px;
      border-radius: 5px;
      padding: 6px 5px;
      cursor: pointer;
      box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);
      background-color: #333;
      color: #efefef;
      outline: none;
      border: none;
    }
  }

  .error-match {
    min-width: 800px;
    padding: 100px 0;
  }
</style>
