<template>
  <i @click="onClick" :class="className"></i>
</template>

<script>

export default {
  name: "Icon",
  props: {
    className: String,
  },
  methods: {
    onClick() {
       this.$emit('btn-click')
     }
  },
}
</script>

<style>

</style>