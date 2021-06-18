<template>
  <div class="todos">
    <div v-if="!allTodosLength" class="empty-list">No todos left</div>
    <div v-else v-for="todo in allTodos" :key="todo.id">
      <TodoItem :todo="todo" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import TodoItem from "./TodoItem"
export default {
  name: "Todos",
  computed: mapGetters(["allTodos", "allTodosLength"]),
  components: {
    TodoItem,
  }
}
</script>

<style scoped>
.empty-list {
  padding: 20px;
  font-size: 1.1rem;
}
</style>