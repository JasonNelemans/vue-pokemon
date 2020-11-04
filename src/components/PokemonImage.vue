<template>
  <img :src="getImage()" :width="width" :height="height" alt="pokemon" @error="onImageError" />
</template>

<script>
  export default { 
    props: {
      src: String,
      width: String, 
      height: String
    }, 
    data() {
      return {
        errorImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png',
        error: false
      }
    },
    methods: {
      onImageError() {
        this.error = true;
      },
      getImage() {
        return this.error ? this.errorImage : this.src
      }
    },
    watch: {
      src() {
        this.getImage();
      }
    }
  }
</script>
