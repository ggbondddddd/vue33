<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Child />
  </div>
</template>

<script>
import {
  ref,
  reactive,
  toRefs,
  readonly,
  isRef,
  isReactive,
  isReadonly,
  isProxy,
} from "vue";

export default {
  name: "App",

  setup() {
    let car = reactive({
      name: "奔驰",
      price: "40w",
    });
    let sum = ref(0);
    let car2 = readonly(car);
    console.log(isRef(sum));
    console.log(isReactive(car));
    console.log(isReadonly(car2));
    console.log(isProxy(sum));

    return {
      ...toRefs(car),
    };
  },
};
</script>

<style scoped></style>
