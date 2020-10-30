<template>
  <div class="list">
      <article v-for="(pokemon, index) in pokemons" :key="index">
        <router-link :to="`/pokemon/${pokemon.id}/`">
        <div class="image">
          <img
            :src="
              `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
            "
            width="105"
            height="105"
            alt="pokemon"
          />
          </div>
          <h3>{{ pokemon.name }}</h3>
          <div class="types">
            <div
              v-for="(type, index) in pokemon.types"
              :key="index"
              class="type"
            >
              <p>{{ type.type.name }}</p>
            </div>
          </div>
        </router-link>
      </article>
    </div>
</template>

<script>
  export default {
    props: {
      pokemons: Array
    }
  }
</script>

<style lang="scss" scoped>
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 25px;
    max-width: 800px;
    color: #fff;

    article {
      background: linear-gradient(to right top, #3d7dca, #306bb3, #225a9c, #134a86, #003a70);
      padding-top: 15px;
      text-align: center;
      text-transform: capitalize;
      border-radius: 5px;
      cursor: pointer;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
      border: 4px solid #FFCB05;

      img {
        margin-bottom: 10px;
      }

      h3, h4 {
        margin: 0;
      }

      .types {
        margin: 10px 0;
        
        .type {
          display: inline-block;
          border: 1px solid black;
          border-radius: 20px;
          margin: 0 5px;
          background-color: #0A2E50;

          p {
            margin: 3px 10px;
          }
        }
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
</style>
