<template>
<div v-if="pokemon">
  <article v-for="(pokemon, index) in pokemon" :key="index">
    <img :src="
              `https://pokeres.bastionbot.org/images/pokemon/${pokemon[0].id}.png`
            "
            width="105"
            height="105"
            alt="pokemon"/>
    <h3 >
      {{ pokemon[0].name }}
    </h3>
  </article>
</div>
</template>

<script lang="ts">
  export default {
    props: {
      typeUrl: String
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
            console.log(' related data ', data);
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