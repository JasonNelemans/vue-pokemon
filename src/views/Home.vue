<template>
  <div class="home">
    <h1>Home</h1>
    <div class="list">
      <article v-for="(pokemon, index) in pokemons" :key="index">
        <img :src="`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`" width="96" height="96" alt="pokemon">
        <h3>{{ pokemon.name}} </h3>
        Type:<div v-for="(type, index) in pokemon.types" :key="index" class="type-list">
          <p>• {{ type.type.name }}</p>
        </div>
        <p>Height: {{ pokemon.height }} </p>
        <p>Weight: {{ pokemon.weight }} </p>
        <p>Base experience: {{ pokemon.base_experience }}</p>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'home',
  data() {
    return {
      pokemons: []
    }
  },
  mounted: function() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10", {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(allPokemon => {
        allPokemon.results.forEach((pokemon: any) => this.fetchPokemonData(pokemon))
      })
      .catch(error => console.log('error: ', error));
  },
  methods: {
    fetchPokemonData(pokemon: any) {
      const url = pokemon.url;
      fetch(url, { method: "get"})
        .then(response => response.json())
        .then((pokeData: any) => this.pokemons.push(pokeData))
        .catch(error => console.log('error: ', error));
    },
  }
}
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 0px;
    width: calc(100% - 0px);
    min-height: calc(100vh - 0px);
    font-family: 'Acme', arial;
    font-size: 1rem;
    font-weight: normal;
    background: linear-gradient(315deg, #3c3a3a 0%, #7f8c8d 74%);

    h1 {
      color: white;
    }
    
  }

  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 25px;
    width: 100%;
    max-width: 800px;

    article {
      background-color: #efefef;
      text-align: center;
      text-transform: capitalize;
      border-radius: 5px;
      cursor: pointer;
      box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);
      
      h3 {
        margin: 0;
      }

      .type-list {
        display: inline-block;

        p {
          margin: 10px 5px 0px 5px;
        }
      }
    }
  }
</style>
