<template>
  <div v-html="Home"></div>
 
</template>

<script>
// @ is an alias to /src
import Home from "./Home.md";

export default {
  name: 'HomeView',
  data() {
    return {
      Home
    }
  },
}
</script>
