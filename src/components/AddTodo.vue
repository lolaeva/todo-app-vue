<template>
  <section class="section__add-form">
    <form @submit="onSubmit" class="add-form">
      <input 
          type="text" 
          name="title"
          v-model="title"
          placeholder="Enter a new to-do" 
      />
      <button>
        <Icon @btn-click="deleteTodo(todo.id)" :className="'fas fa-angle-right fa-2x'"/>
        <!-- <i class="fas fa-angle-right fa-2x"></i> -->
      </button>
    </form>
  </section>
</template>

<script>
import Icon from "./Icon.vue"
import { mapActions, mapGetters } from "vuex"

export default {
  name: "AddTodo",
  data() {
    return {
      title: ''
    }
  },
  components: {
    Icon,
  },
  computed: mapGetters(["lastId"]),
  methods: {
    ...mapActions(["addTodo", "incrementId"]),
    onSubmit(e) {
      e.preventDefault()
      this.incrementId()
      this.addTodo({
        id: this.lastId,
        title: this.title,
        completed: false,
        edit: false,
      })
      this.title = ""
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  border-bottom: 2px solid rgb(214, 214, 214);
}

input[type="text"] {
  flex: 11;
  padding: 15px;
  border: none;
  outline: 0;
}

button {
  flex: 1;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  color: rgb(73, 73, 73);
}
</style>
