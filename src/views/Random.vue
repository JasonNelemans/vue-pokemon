<template>
  <div class="random">
    <button class="randomize" @click="randomizeId">Randomize</button>
    <PokemonDetail v-if="id" :id="id" />
  </div>
</template>

<script lang="ts">
  import PokemonDetail from "@/components/PokemonDetail.vue"

  export default {
    components: {
      PokemonDetail
    },
    data() {
      return {
        id: null as null | string
      }
    },
    mounted() {
      this.randomizeId();
    },
    methods: {
      randomizeId() {
        const randomId = Math.floor(Math.random() * 1050) + 1  
        this.id = `${randomId}`;
      }
    },
  }
</script>

<style lang="scss">
  .randomize {
    outline: none;
    margin-left: 27px;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    background-color: #f00000;
    color: #fff;
    border: 2px solid #222224;
    padding: 10px 20px;
    font-size: 1.2rem;
    cursor: pointer;
  }
</style>