<template>
  <footer >
    <button @click="checkAll" class="complete-button">Complete All</button>
    <button @click="deleteAll" class="delete-button">Delete All</button>
  </footer>
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "Footer",
  methods: {
    ...mapActions(["deleteAll", "checkAll"])
  }
}
</script>

<style scoped>

footer {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}

button {
  display: inline-block;
  color: #fff;
  border: none;
  padding: 6px;
  margin: 10px;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  font-family: inherit;
}
.complete-button {
  background: #81d8cb;
}
.delete-button {
  background: rgb(204, 104, 137);
}

</style>