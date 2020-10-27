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
    width: 100%;
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
