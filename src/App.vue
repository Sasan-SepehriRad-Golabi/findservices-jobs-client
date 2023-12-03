<template>
  <v-app>
    <HomePage />
  </v-app>
</template>
<script>
import HomePage from "@/views/HomePage";
export default {
  components: {
    HomePage
  },
  data() {
    return {

    }
  }
}
</script>
<style>
@font-face {
  font-family: myfont;
  src: url('./assets/fonts/Yekan.woff');
}

* {
  font-family: myfont;
}
</style>
