<template>
  <div v-if="pokemon" class="related">
    <article class="related-pokemon" v-for="(pokemon, index) in pokemon" :key="index">
      <PokemonImage 
        :src="`https://pokeres.bastionbot.org/images/pokemon/${pokemon[0].id}.png`"
        :height="'105'"
        :width="'105'"
      />
      <h3 >
        {{ pokemon[0].name }}
      </h3>
    </article>
  </div>
</template>

<script lang="ts">
  import PokemonImage from "@/components/PokemonImage.vue"

  export default {
    props: {
      typeUrl: String
    },
    components: {
      PokemonImage
    },
    data() {
      return {
        pokemon: []
      }
    },
    mounted() {
      this.fetchByType();
    },
    methods: {
      fetchByType() {
        fetch(`${this.typeUrl}`, { method: "get"})
          .then(response => response.json())
          .then(data => {
            [...Array(3)].map((poke, i) => {
              const randomId = Math.floor(Math.random() * data.pokemon.length);
              fetch(`${data.pokemon[randomId].pokemon.url}`, {
                method: "get"
              })
                .then(response => {
                  return response.json();
                })
                .then(pokemonData => this.pokemon.push([pokemonData]))
                .catch(error => console.log("error: ", error));
            })
          })
      },
      randomId(length: number) {
        const randomId = Math.floor(Math.random() * length) + 1
        return randomId
      }
    }
  }
</script>

<style lang="scss">
  .related {
    display: flex;
    text-transform: capitalize;

    .related-pokemon {
      margin: 15px;
    }
  }
</style>