<template>
  <h2>当前求和为:{{ sum }}</h2>
  <button @click="sum++">点我加1</button>
  <hr />
  <h2>当前点击时鼠标的坐标为:x:{{ point.x }} y:{{ point.y }}</h2>
</template>

<script>
// 我理解的这里的这个hooks和mixins的区别,mixins也是创建一个文件夹把回复用的一些方法放在那里,但是mixins有个致命缺点不能使用vue的api,除非你把整个vue全部
// 引入进mixins,那太大了,才能调用vue的生命周期之类的,而vue3这里hooks可以实现,因为vue3是按需引入,我们只需要把很少的一部分东西引入进hooks就可以实现功能.
import { ref } from "vue";
import usePoint from "../hooks/usePoint";
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    let point = usePoint();

    return { sum, point };
  },
};
</script>
