<template>
  <div class="home">
    <h1>Browse Pokemon List</h1>
    <div class="home-content">
      <SelectedType />
      <FetchButtons />
      <PokemonList :pokemons="sortedPokemons" />
      <div v-if="sorting && sortedPokemons.length === 0" class="match-error">
        <h1>Sorry, no match found.</h1>
      </div>
      <FetchButtons />
    </div>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions, mapMutations } from 'vuex'

import PokemonList from '@/components/PokemonList.vue'
import FetchButtons from '@/components/FetchButtons.vue'
import SelectedType from '@/components/SelectedType.vue'

export default {
  name: "home",
  components: {
    PokemonList,
    FetchButtons,
    SelectedType
  },
  data() {
    return {
      sortedPokemons: [] as any,
      sorting: false,
      // optionsArray: [],
      // types: [],
      // loadedTypes: false
    };
  },
  computed: {
    ...mapState('pokemon', ['dataObject', 'pokemons', 'apiUrl', 'selected'])
  },
  mounted() {
    this.fetchAllPokemon();
  },
  methods: {
    ...mapMutations('pokemon', ['changeStateApiUrl']),
    ...mapActions('pokemon', ['fetchAllPokemon']),
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
      this.selected = 'none';
      this.sorting = false;
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

  .match-error {
    min-width: 800px;
    padding: 100px 0;
  }
</style>
