<template>
  <div class="detail">
    <div class="detail-view">
      <div v-if="pokemon" class="image">
        <img :src="`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`" alt="pokemon" width="220"
            height="220" />
      </div>
      <div v-if="pokemon" class="data">
        <h2>{{ pokemon.name }}</h2>
        <div class="property">
          <div class="left">Base Experience</div>
          <div class="right">{{ pokemon.base_experience }} XP</div>
        </div>
        <div class="property">
          <div class="left">Height</div>
          <div class="right">{{ pokemon.height / 10 }} m</div>
        </div>
        <div class="property">
          <div class="left">Weight</div>
          <div class="right">{{ pokemon.weight / 10 }} kg</div>
        </div>
        <h3>Pokemon Types</h3>
        <div class="types">
          <div class="type" 
            v-for="(value, index) in pokemon.types"
            :key="'value'+index">
            {{ value.type.name }}
          </div>
        </div>
        <h3>Abilities</h3>
        <div class="abilities">
          <div class="ability" 
            v-for="(value, index) in pokemon.abilities"
            :key="'value'+index">
            {{ value.ability.name }}
          </div>
        </div>
      </div>
      <router-link to="/"><button class="home-button">Back to Home</button></router-link>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: "pokemon",
    props: {
      id: Number
    },
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
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`, {
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

<style lang="scss" scoped>
  .detail {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 30px;
    width: calc(100% - 20px);
    color: #fff;

    .detail-view {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      max-width: 510px;
      padding: 20px;
      background: linear-gradient(to right top, #3d7dca, #306bb3, #225a9c, #134a86, #003a70);  
      border-radius: 5px;
      box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);
      border: 4px solid #FFCB05;

    
      .image {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        padding: 30px;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 15px 30px rgba(0,0,0,.2),
                    0 10px 10px rgba(0,0,0,.2);
      }

      h2 {
        text-transform: capitalize;
      }

      .data {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin-bottom: 40px;

        .property {
          width: 90%;
          max-width: 400px;
          border-bottom: 1px solid #ccc;
          margin-bottom: 10px;
          
          .left { float: left; }
          .right { float: right; }
        }

        h3 {
          width: 90%;
          max-width: 400px;
          border-bottom: 1px solid #ccc;
        }

        .types, .abilities {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          width: 90%;
          max-width: 400px;

          .type, .ability {
            margin: 0 10px 10px 0;
            padding: 5px 10px;
            border-radius: 20px;
            color: #fff;
            font-size: 1rem;
            letter-spacing: 2px;
            text-transform: capitalize;
            word-wrap: none;
            word-break: keep-all;
          }

          .type { background-color: #0A2E50; }
          .ability { background-color: #C73015; }
        }
      }

      .home-button {
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: #333;
        color: #efefef;
        padding: 10px 20px;
        margin-bottom: 20px;
        font-size: 1.2rem;
        cursor: pointer;
      }
    }
  }
</style>