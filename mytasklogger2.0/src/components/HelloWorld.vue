<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p class="no-print">ToDo Item: <input v-model="name" /></p>
    <p>{{ name }}</p>

    <div v-for="item in info" :key="item.id">
      {{ item.name }} -
      <button type="button" v-on:click="deleteToDo(item.id)">Delete</button> |
      <!-- <button type="button" v-on:click="editToDo(item)">Edit</button> --> 
      <router-link :to="{ name: 'Edit', params: {id: item.id }}">Edit</router-link>
    </div>
    <p>
      <button type="button" v-on:click="writeToDo()">Auto Add ToDo</button>
    </p>

    <div v-if="editSeen" id="hide">
      <p>hide me</p>
      <input type="hidden" v-model="editItem.id" /><br />
      <input type="text" v-model="editItem.name" />
      <button type="button" v-on:click="updateToDo(editItem)">
        Update ToDo
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//import VueAxios from "vue-axios";

export default {
  name: "HelloWorld",
  data() {
    return {
      name: "",
      info: null,
      editSeen: false,
      editItem: null,
    };
  },
  props: {
    msg: String,
  },
  mounted() {
    this.getToDo();
  },
  methods: {
    getToDo() {
      axios
        .get("http://metistestapi.daks.co.za/api/ToDoItem")
        .then((response) => (this.info = response.data));
    },
    writeToDo() {
      const todo = { name: this.name };
      axios
        .post("http://metistestapi.daks.co.za/api/ToDoItem", todo)
        .then((response) => {
          return response, this.getToDo();
        });
    },
    editToDo: function (editItem) {
      this.editItem = editItem;
      this.editSeen = true;
    },
    updateToDo: function (editItem) {
      axios
        .put(
          "http://metistestapi.daks.co.za/api/ToDoItem/" + editItem.id,
          editItem
        )
        .then((response) => {
          return response, this.getToDo();
        });
      this.editSeen = false;
    },
    deleteToDo: function (id) {
      axios
        .delete("http://metistestapi.daks.co.za/api/ToDoItem/" + id)
        .then((response) => {
          return response, this.getToDo();
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
