<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
export default {
  name: 'home',
  mounted: function() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151%27", {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        console.log('data: ', jsonData)
      });
  }
}
</script>
