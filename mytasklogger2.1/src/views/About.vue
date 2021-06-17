<template>
  <div class="home">
    <AddToDo />
  </div>
</template>

<script>
import AddToDo from '../components/AddToDo.vue';

export default {
  name: "Home",
  components: {
    AddToDo
  },
};
</script>
