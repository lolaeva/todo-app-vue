<template>
  <footer >
    <!-- <button @click="checkAll" class="complete-button">Complete All</button> -->
    <!-- <button @click="deleteAll" class="delete-button">Delete All</button> -->
    <Button @click="checkAll" :class="'complete-button'" :text="'Complete All'"/>
    <Button @click="deleteAll" :class="'delete-button'" :text="'Delete All'"/>
  </footer>
</template>

<script>
import Button from "./Button.vue"
import { mapActions } from "vuex"

export default {
  name: "Footer",
  methods: {
    ...mapActions(["deleteAll", "checkAll"])
  },
  components: {
    Button,
  }
}
</script>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}

.complete-button {
  background: #81d8cb;
}
.delete-button {
  background: rgb(201, 93, 129);
}


</style>