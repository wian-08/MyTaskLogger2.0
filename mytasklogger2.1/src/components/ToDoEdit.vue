<template>
  <div>
    <div>
      <p>edit me = {{ id }}</p>
      <input type="hidden" v-model="editItem.id" /><br />
      <input type="text" v-model="editItem.name" />
      <input
        type="checkbox"
        placeholder="Ex: 53453"
        v-model="editItem.isComplete"
        class="form-control"
      />
      <button type="button" v-on:click="updateToDo(editItem)">
        Update ToDo
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: () => ({ editItem: [], id: 0 }),
    created() {
    this.id = this.$route.params.id;
},
  mounted() {
      axios
        .get("http://metistestapi.daks.co.za/api/ToDoItem/" + this.id)
        .then((response) => (this.editItem = response.data));
  },
  methods: {
    updateToDo: function (editItem) {
      axios
        .put(
          "http://metistestapi.daks.co.za/api/ToDoItem/" + editItem.id,
          editItem
        )
        .then((response) => {
          return response, this.$router.push('/') ;
        });
      this.editSeen = false;
    },
  },
};
</script>