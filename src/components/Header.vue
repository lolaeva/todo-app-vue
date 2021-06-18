<template>
  <header>
    <div class="header-text-big"> {{ allTodosLength }}
      <span v-if="allTodosLength <= 1"> Task</span>
      <span v-else> Tasks</span>
    </div>
    <div class="header-text-regular"> {{ remainingTodosLength }}
      <span v-if="remainingTodosLength <= 1"> task remains</span>
      <span v-else> tasks remain</span>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "Header",
  computed: mapGetters(["allTodosLength", "remainingTodosLength"]),
} 
</script>

<style scoped>
body, html {
  box-sizing: border-box;
}
header {
  height: 100px;
  background: #81d8cb;
  color: #fff;
  padding: 40px 0 0 60px;
  border-radius: 6px 6px 0 0;
}
.header-text-big {
  font-size: 2rem;
  margin-bottom: 10px;
}
.header-text-regular {
  font-size: 1.05rem;
}
</style>