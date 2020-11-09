<template>
  <div class="fetch-buttons">
      <button class="buttons" @click="changeStateApiUrl(dataObject.previous)">Previous</button>
      <button class="buttons" @click="changeStateApiUrl(dataObject.next)">Next</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

  export default {
    computed: {
    ...mapState('pokemon', ['dataObject'])
    },
    methods: {
      ...mapMutations('pokemon', ['changeStateApiUrl']),
    }
  }
</script>

<style lang="scss" scoped>
    .fetch-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: center;

      .buttons {
          width: 125px;
          outline: none;
          border: none;
          border-radius: 5px;
          background-color: #f0f0f0;
          color: #222224;
          padding: 10px 20px;
          margin-bottom: 20px;
          font-size: 1.2rem;
          cursor: pointer;
          box-shadow: 0 15px 30px rgba(0,0,0,.2),
                    0 10px 10px rgba(0,0,0,.2);
      }
    }
</style>