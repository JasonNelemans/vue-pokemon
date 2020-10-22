<template>
  <article>
    <img />
    <h3>This is the related component</h3>
  </article>
</template>

<script lang="ts">
  export default {
    props: {
      typeUrl: String
    },
    mounted() {
      this.fetchByType();
    },
    methods: {
      fetchByType() {
        fetch(`${this.typeUrl}`, { method: "get"})
          .then(response => response.json())
          .then(data => console.log('related data: ', data))
      }
    }
  }
</script>