<template>
  <div class="child">
    <h3>我是child组件</h3>
    <Son />
  </div>
</template>

<script>
import { inject } from "vue";
import Son from "./Son";
export default {
  name: "Child",
  components: {
    Son,
  },
};
</script>

<style scoped>
.child {
  background-color: green;
  padding: 10px;
}
</style>
