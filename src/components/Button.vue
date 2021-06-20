<template>
  <button @click="onClick()" :class="className">{{ text }}</button>
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "Button",
  props: {
    text: String,
    className: String,
  },
   methods: {
     onClick() {
       this.$emit('btn-click')
     }
   },
}
</script>

<style scoped>

button {
  display: inline-block;
  color: #fff;
  border: none;
  padding: 6px;
  margin: 12px;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  font-family: inherit;
}

</style>