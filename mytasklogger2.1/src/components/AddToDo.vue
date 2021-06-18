<template>
<div id="app">
<form class="new-item-form">
    <div class="field">
            <label>Type:</label>
            <select id="type">
              <option value="invoice">Important</option>
              <option value="payment">Minor</option>
            </select>
          </div>
          
          <div class="field">
            <label>Details:</label>
            <input v-model="name" id="details" style="width: 400px;">
          </div>
          <div class="field">
            
          </div>
          <button id="add" type="button" v-on:click="writeToDo()"> Add</button> <br>
          </form>
          <span id="output" v-if="name != ''"> {{ name }} </span>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'AddToDo',
    el: '#app',
    data () {
        return {
            name: '',
        }
    },
    mounted() {
    this.getToDo()
  },
    methods: {
        getToDo() {
        axios
        .get('http://metistestapi.daks.co.za/api/ToDoItem')
        .then(response => (this.info = response.data))
        },

        writeToDo() {
          try {
            if(! document.getElementById('details').value){
              alert("You didn't enter anything");
            }else{
              const todo = { name: this.name };
      axios.post("http://metistestapi.daks.co.za/api/ToDoItem", todo)
      .then(response => {
       this.getToDo();
       this.name = '';
       return response;
  });
            }
            
          } catch (error) {
            document.getElementById('output').innerHTML = error;
            
          }
    }
}
}
</script>

<style>

</style>