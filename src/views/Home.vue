<template>
  <div class="home">
    <h1>Browse Pokemon List</h1>
    <div class="home-content">
    <div class="selected">
      <div>
        <label for="types">Choose a type:</label>{{ '  ' }}
        <select v-model="selected">
          <option v-for="option in options" v-bind:value="option.value" :key="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
      <span id="selected-one">Selected: {{ selected }}</span>
    </div>
    <div class="fetch-buttons">
      <button class="buttons" @click="changeStateApiUrl(dataObject.previous)">Previous</button>
      <button class="buttons" @click="changeStateApiUrl(dataObject.next)">Next</button>
    </div>
    <PokemonList :pokemons="sortedPokemons" />
    <div v-if="sorting && sortedPokemons.length === 0" class="error-match">
      <h1>Sorry, no match found.</h1>
    </div>
    <div class="fetch-buttons">
      <button class="buttons" @click="changeStateApiUrl(dataObject.previous)">Previous</button>
      <button class="buttons" @click="changeStateApiUrl(dataObject.next)">Next</button>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vuex from 'vuex'
import { mapState, mapActions, mapMutations } from 'vuex'

import PokemonList from '@/components/PokemonList.vue'

export default {
  name: "home",
  components: {
    PokemonList
  },
  data() {
    return {
      sortedPokemons: [] as any,
      selected: 'none',
      sorting: false,
      options: [
        { text: 'none', value: 'none'},
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
      // optionsArray: [],
      // types: [],
      // loadedTypes: false
    };
  },
  computed: {
    ...mapState('pokemon', ['dataObject', 'pokemons', 'apiUrl'])
  },
  mounted() {
    this.fetchAllPokemon();
  },
  methods: {
    ...mapMutations('pokemon', [
      'changeStateApiUrl'
    ]),
    ...mapActions('pokemon', [
      'fetchAllPokemon'
    ]),
    sortPokemon() {
      if(this.selected !== 'none') {
        this.sorting = true;
        this.sortedPokemons = [];
        this.pokemons.forEach((pokemon: any) => {
          pokemon.types.forEach((type: any) => {
            if(type.type.name === this.selected) {
              this.sortedPokemons.push(pokemon)
            }
          })
        })
      } else if(this.selected === 'none') {
        this.sortedPokemons = this.pokemons
      }
    },
    refreshHandler() {
      this.sortedPokemons = this.pokemons;
      this.selected = 'none';
    },
    // fetchTypes() {
    //   this.pokemons.forEach(pokemon => {
    //     pokemon.types.forEach(pokeType => {
    //       this.types.push(pokeType.type.name)
    //       this.reduceTypeArray();
    //     })
    //   })
    //   this.loadedTypes = true;
    // },
    // reduceTypeArray() {
    //   const filteredArray = [...new Set(this.types)]
    //   this.types = filteredArray
    // },
    // createOptions() {
    //   this.types.forEach(type => {
    //     const typeObject = { text: type, value: type};
    //     this.optionsArray.push(typeObject);
    //   })
    // }
  },
  watch: {
    apiUrl() {
      this.fetchAllPokemon();
      this.selected = 'none'
    },
    pokemons() {
      this.sortedPokemons = this.pokemons;
    },
    selected() {
      this.sortPokemon();
    },  
  }
  // watch: {
  //   sortedPokemons() {
  //     this.fetchTypes();
  //   },
  //   loadedTypes() {
  //     this.createOptions();
  //   }
  // }
};
</script>

<style lang="scss" scoped>
  .home {
    margin-bottom: 25px;
    width: inherit;

    .home-content {
      margin: 20px;
    }
  }

  .fetch-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: center;

    .buttons {
        width: 125px;
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

    #selected-one {
      text-transform: capitalize;
    }

    // #refresh {
    //   margin: 0;
    //   width: 70px;
    //   border-radius: 5px;
    //   padding: 6px 5px;
    //   cursor: pointer;
    //   box-shadow: 0 15px 30px rgba(0,0,0,.2),
    //               0 10px 10px rgba(0,0,0,.2);
    //   background-color: #333;
    //   color: #efefef;
    //   outline: none;
    //   border: none;
    // }
  }

  .error-match {
    min-width: 800px;
    padding: 100px 0;
  }
</style>
