<template>
  <div class="selected">
    <div>
      <label for="types">Choose a type:</label>{{ '  ' }}
      <select v-model="selectedLocal">
        <option v-for="option in options" v-bind:value="option.value" :key="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>
    <span id="selected-one">Selected: {{ selectedLocal }}</span>
    <button id="refresh" @click="selectedLocal = 'none'">Refresh</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      selectedLocal: 'none',
      options: [
        { text: 'none', value: 'none'},
        { text: 'Bug', value: 'bug' },
        { text: 'Dark', value: 'dark' },
        { text: 'Dragon', value: 'dragon' },
        { text: 'Electric', value: 'electric' },
        { text: 'Fairy', value: 'fairy' },
        { text: 'Fighting', value: 'fighting' },
        { text: 'Fire', value: 'fire' },
        { text: 'Flying', value: 'flying' },
        { text: 'Ghost', value: 'ghost' },
        { text: 'Grass', value: 'grass' },
        { text: 'Ground', value: 'ground' },
        { text: 'Ice', value: 'ice' },
        { text: 'Normal', value: 'normal' },
        { text: 'Poison', value: 'poison' },
        { text: 'Psychic', value: 'psychic' },
        { text: 'Rock', value: 'rock' },
        { text: 'Steel', value: 'steel' },
        { text: 'Water', value: 'water' },
      ],
    }
  },
  computed: {
    ...mapState('pokemon', ['selected'])
  },
  methods: {
    ...mapMutations('pokemon', ['changeSelected']),
  },
  watch: {
    selectedLocal() {
      this.changeSelected(this.selectedLocal)
    }
  }
}
</script>

<style lang="scss" scoped>
  .selected * {
    margin: 5px;
  }
  .selected {

    #selected-one {
      text-transform: capitalize;
    }
    
    #refresh {
      width: 70px;
      border-radius: 5px;
      padding: 6px 5px;
      cursor: pointer;
      box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);
      background-color: #333;
      color: #efefef;
      outline: none;
      border: none;
      display: inline;
    }
  }

</style>

