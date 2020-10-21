<template>
  <div class="detail">
    <div class="image">
      <img :src="`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`" alt="pokemon" width="220"
            height="220" />
    </div>
    <h1>{{ pokemon.name }}</h1>
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

<style lang="scss">
  .detail {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      max-width: 510px;
      padding: 50px 0 0;
      background: linear-gradient(to right top, #3d7dca, #306bb3, #225a9c, #134a86, #003a70);
      border-radius: 5px;
      box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);

    .image {
          background-color: #efefef;
          padding: 45px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 15px 30px rgba(0,0,0,.2),
                      0 10px 10px rgba(0,0,0,.2);
    }

    h1 {
      text-transform: capitalize;
    }
  }
</style>