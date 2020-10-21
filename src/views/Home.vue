<template>
  <div class="home">
    <h1>Home</h1>
    <div class="list">
      <article v-for="(pokemon, index) in pokemons" :key="index">
        <router-link :to="`/pokemon/${pokemon.id}/`">
          <img
            :src="
              `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
            "
            width="96"
            height="96"
            alt="pokemon"
          />
          <h3>{{ pokemon.name }}</h3>
          Type:
          <div
            v-for="(type, index) in pokemon.types"
            :key="index"
            class="type-list"
          >
            <p>• {{ type.type.name }}</p>
          </div>
          <p>Height: {{ pokemon.height }}</p>
          <p>Weight: {{ pokemon.weight }}</p>
          <p>Base experience: {{ pokemon.base_experience }}</p>
        </router-link>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "home",
  data() {
    return {
      pokemons: [],
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
        .catch(error => console.log("error: ", error));
    },
    fetchAllPokemon() {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=10", {
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
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 25px;
  width: 100%;
  max-width: 800px;
  color: #fff;

  article {
    background: linear-gradient(to right top, #3d7dca, #306bb3, #225a9c, #134a86, #003a70);
    padding-top: 15px;
    text-align: center;
    text-transform: capitalize;
    border-radius: 5px;
    margin: 7px;
    cursor: pointer;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);

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
