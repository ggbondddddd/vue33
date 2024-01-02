<template>
  <div class="app">
    <h3>我是App组件,{{ name }}--{{ price }}</h3>
    <Child />
  </div>
</template>

<script>
import { reactive, toRefs, provide } from "vue";
import Child from "./components/Child.vue";
export default {
  name: "App",
  components: {
    Child,
  },
  setup() {
    let car = reactive({
      name: "奔驰",
      price: "40w",
    });
    // 这个provide父子之间也可以用，但是不推荐，直接用props即可
    provide("car", car); //给自己的后代组件传递数据,后代就是爷爷和孙子，或者曾孙，
    return {
      ...toRefs(car),
    };
  },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
