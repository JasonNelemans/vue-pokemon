<template>
  <div v-if="pokemon" class="attributes">
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
</template>

<script>
  export default {
    props: {
      pokemon: Object
    },
  }
</script>

<style lang="scss" scoped>
  .attributes {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 40px;

    h2 {
        text-transform: capitalize;
    }

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
</style>