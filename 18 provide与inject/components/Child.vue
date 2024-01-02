<template>
  <div class="child">
    <h3>我是child组件（子组件）</h3>
    <Son />
  </div>
</template>

<script>
import { inject } from "vue";
import Son from "./Son.vue";
export default {
  name: "Child",
  components: {
    Son,
  },
  setup() {},
};
</script>

<style scoped>
.child {
  background-color: green;
  padding: 10px;
}
</style>
