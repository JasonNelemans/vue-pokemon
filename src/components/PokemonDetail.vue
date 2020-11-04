<template>
  <div class="detail">
    <div class="detail-view">
      <div v-if="pokemon" class="image">
        <PokemonImage 
          :src="`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`" 
          :width="'220'" 
          :height="'220'" 
        />
      </div>
      <PokemonAttributes :pokemon="pokemon" v-if="pokemon" />
      <div class="detail-buttons">
        <router-link to="/"><button class="home-button">Back to Home</button></router-link>
        <router-link to="/random"><button class="random-button" @click="randomizeId">Randomize</button></router-link>
      </div>
    </div>
    <div v-if="types">
      <div class="related-container" v-for="(type, index) in types" :key="index" >
        <h3>Other <span>{{ type.type.name }}</span> Pokemon:</h3>
        <RelatedPokemon :typeUrl="type.type.url" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import RelatedPokemon from "@/components/RelatedPokemon.vue"
  import PokemonImage from "@/components/PokemonImage.vue"
  import PokemonAttributes from "@/components/PokemonDetails/PokemonAttributes.vue"

  export default {
    name: "pokemon-detail",
    components: {
      RelatedPokemon,
      PokemonImage,
      PokemonAttributes
    },
    props: {
      id: String
    },
    data() {
      return {
        pokemon: {},
        types: [], 
        detailId: this.id
      }
    },
    mounted() {
      this.fetchPokemon();
    },
    methods: {
      fetchPokemon() {
        this.types = [];
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.detailId}`, {
        method: "get"
      })
        .then(response => {
          return response.json();
        })
        .then(pokemon => {
          this.pokemon = pokemon;
        })
        .catch(error => console.log("error: ", error));
      },
      getTypes() {
        this.pokemon.types.forEach((type: any) => {
          return this.types.push(type);
        });
      },
      randomizeId() {
        const randomId = Math.floor(Math.random() * 1050) 
        this.detailId = `${randomId}`;
      }
    },
    watch: {
      detailId() {
        this.fetchPokemon();
      },
      pokemon() {
        this.getTypes();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .detail {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;
    color: #fff;

    .detail-view {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
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

      .random-button {
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: #efefef;
        color: #333;
        padding: 10px 20px;
        margin: 0 15px;
        margin-bottom: 20px;
        font-size: 1.2rem;
        cursor: pointer;
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

  .related-container {
    margin-top: 30px;

    h3 {
      margin: 0;
      text-transform: capitalize;
      color: black;

      span {
        text-decoration: underline;
      }
    }
  }
</style>