<template>
  <div class="home">
    <h2>Home</h2>
    <Main/>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/Main.vue";

export default {
  name: "Home",
  components: {
    Main,
  },
};
</script>
