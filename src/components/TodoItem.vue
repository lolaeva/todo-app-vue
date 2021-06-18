<template>
  <section class="todo">
    <div class="todo-wrapper" v-show="!todo.edit">
      <input class="checkbox"
        type="checkbox"
        :checked="todo.completed"
        @change="changeCompleted(todo.id)"
      >
      <div class="title" :class="[todo.completed ? 'completed' : '', 'title']">
        {{ todo.title }}
      </div>
      <div class="icons">
        <Icon @btn-click="showEdit(todo)" :className="'fas fa-edit'"/>
        <Icon @btn-click="deleteTodo(todo.id)" :className="'fas fa-times'"/>
      </div>
    </div>
    <!-- For edit input. Hidden in default -->
    <div class="todo-wrapper" v-show="todo.edit">
      <input v-model="todo.title" type="text" >
      <div class="icons">
        <Icon @btn-click="editTodo(todo)" :className="'fas fa-check'"/>
      </div>
    </div>
  </section>
</template>

<script>
import Icon from "./Icon"
import { mapActions } from "vuex"

export default {
  props: {
    todo: Object,
  },
  name: "TodoItem",
  components: {
    Icon,
  },
  methods: {
    ...mapActions(["deleteTodo", "changeCompleted", "showEdit", "editTodo"])
  }
}
</script>

<style scoped>
.todo-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 40px;
  border-bottom: 2px solid rgb(214, 214, 214);
  padding: 5px 15px;
}

.todo:hover {
  background: rgba(172, 221, 209, 0.151);
}

.completed {
  text-decoration: line-through;
}

.title {
  margin-left: 5px;
}

.icons {
  margin-left: auto;
  display: flex;
}

.fas {
  cursor: pointer;
  margin: 0 5px;
}

.fa-edit, .fa-check {
  color: rgb(50, 179, 151);
}

.fa-times {
  color: rgb(187, 0, 62);
}

input[type="text"] {
  width: 80%;
  padding: 10px;
  border: none;
  outline: 0;
  /* transition: border-width 0.3s linear; */
}

/* input[type="text"]:focus {
  border-width: 2px;
  border-bottom: 2px solid #81d8cb;
} */

input[type="text"]:after {
  display:block;
  content: '';
  border-bottom: solid 3px #81d8cb; 
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
}

input[type="text"]:hover:after { transform: scaleX(1); }

</style>