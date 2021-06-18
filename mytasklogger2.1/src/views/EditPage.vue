<template>
<h1>You can edit your tasks from this page</h1>
    <ToDoEdit />
</template>

<script>
import ToDoEdit from '../components/ToDoEdit.vue';

export default {
    name: 'Student',
    components: {
        ToDoEdit
    }
    
}
</script>

<style>
p {
    color: blue;
}
h1 {
    color: blueviolet;
}
</style>