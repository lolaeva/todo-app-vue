// import axios from "axios"

const state = {
  todos: [
    {
      id: 1,
      title: 'Learn vue',
      completed: false,
      edit: false
    },
    {
      id: 2,
      title: 'Learn vuex',
      completed: false,
      edit: false
    }
  ],
  last_id: 2,
  
}

const getters = {
  allTodos: (state) => state.todos,
  allTodosLength: (state) => state.todos.length,
  remainingTodosLength: (state) =>state.todos.filter(todo => !todo.completed).length,
  lastId: (state) => state.last_id,
}

const actions = {
  addTodo({commit}, todo) {
    commit("newTodo", todo)
    console.log(state.todos)
  },
  deleteTodo({commit}, id) {
    commit("removeTodo", id)
  },
  incrementId({commit}) {
    commit("nextId")
  },
  changeCompleted({commit}, id) {
    commit("toggleCompleted", id)
  },
  editTodo({commit}, todo) {
    commit("updateTodo", todo)
  },
  showEdit({commit}, todo) {
    commit("displayEdit", todo)
  },
  deleteAll({commit}) {
    commit("removeAll")
  },
  checkAll({commit}) {
    commit("completeAll")
  },
}

const mutations = {
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) => 
    state.todos = state.todos.filter((todo) => todo.id !== id),
  nextId: (state) => ++state.last_id,
  toggleCompleted: (state, id) => {
    const todo = state.todos.find((todo) => todo.id === id)
    todo.completed = !todo.completed
  },
  updateTodo: (state, todo) => {
    const old = state.todos.find((t) => t.id === todo.id)
    console.log(todo.title)
    old.title = todo.title
    old.edit = false
  },
  displayEdit: (state, todo) => {
    state.todos.find((t) => t.id === todo.id).edit = true
  },
  removeAll: (state) => state.todos = [],
  completeAll: (state) => state.todos.forEach(todo => todo.completed = true)
}

export default {
  state,
  getters,
  actions,
  mutations
}
