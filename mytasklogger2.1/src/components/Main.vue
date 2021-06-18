<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="wrapper">
        <h1>Welcome to Your <br/>Task Logger</h1>
      </div>
    <div id="app">
      <footer>
        <input type="text" v-model="searchToDo" placeholder="Search for a task" />
        <br>
        
            <ol>
        <div v-for="item in filteredTasks" :key="item.id">
           <li> {{ item.name }} -
           <button type="button" v-on:click="deleteToDo(item.id)">Delete</button> 
           | <router-link :to="{ name: 'Student', params: {id: item.id }}">Edit</router-link>
           | <input id="check" type="checkbox" checked='checked' v-show="item.isComplete" ></li>
        </div></ol>
        <div v-if="editSeen" id="hide">
            <p>hide me</p>
            <input type="hidden" v-model="editItem.id"><br/>
            <input type="text" v-model="editItem.name">
            <button type="button" v-on:click="updateToDo(editItem)">Update ToDo</button>
            <button type="button" @click="updateStatus(updateComplete)">Completed</button>
        </div>
      </footer>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Main',
  props: {
    msg: String
  },
  el: '#app',
  data() {
    return{
    name: '',
    info: [],
    editSeen: false,
    editItem: null,
    updateComplete: null,
    searchToDo: ''
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
  editToDo: function (editItem) {
    this.editItem = editItem
    this.editSeen = true;
  },
  updateToDo: function (editItem) {
    axios.put('http://metistestapi.daks.co.za/api/ToDoItem/' + editItem.id, editItem)
    .then(response => {
      this.getToDo(), this.editSeen = false;
        console.log('This task has been edited')
        return response
    })
  },
  deleteToDo: function (id) {
    if(this.isComplete){
      axios.delete('http://metistestapi.daks.co.za/api/ToDoItem/' + id)
        .then(response => {
        this.getToDo();
        return response
      })
  } else{
      alert("This task is not completed. Complete the task and try again.")
       }
  },
  updateStatus: function (isComplete) {
    axios.put('http://metistestapi.daks.co.za/api/ToDoItem/' + isComplete)
    .then(response => {
    this.getToDo(),this.isComplete = true;
    console.log("Task is completed")
    return response
  })
}
},
computed: {
  filteredTasks: function () {
    return this.info.filter((info) => {
      return info.name.match(this.searchToDo)
    });
  }
}
}
</script>

<style>
body{
    margin: 0;
    font-family: Roboto; 
  }
  .wrapper{
    max-width: 960px;
    margin: 0 auto;
  }
  h1{
    margin: 40px auto;
    color: #ff0aa7;
    text-align: center;
  }
  ul{
    padding: 0;
    list-style-type: none;
    
  }
  li{
    padding: 6px 10px;
    border: 1px solid #eee;
    margin: 3px auto;
    margin-left: 0%;
  }
  li h4{
    color: #ff0aa7;
    margin: 0;
    text-transform: capitalize;
  }
  span{
    padding: 6px 10px;
    border: solid 1px black;
    border-radius: 4px;
    margin: 3px auto;
    margin-left: 40%;
  }
  footer{
    background: #eee;
    padding: 60px;
    margin-top: 60px;
  }
  form{
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
  }
  label{
    display: block;
    font-weight: bold;
    font-size: 0.8em;
    color: #333;
    margin: 16px 0 6px;
  }
  input, select{
    padding: 6px;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    cursor: pointer;
  }
  .field{
    display: inline-block;
    margin: 0 10px;
  }
  #add{
    color: white;
    border: 0;
    background: #ff0aa7;
    padding: 6px;
    min-width: 80px;
    border-radius: 4px;
    cursor: pointer;
  }
  footer a{
    text-align: center;
    display: block;
    color: #999;
    margin-top: 40px;
    font-size: 0.7em;
  }
</style>