<template>
  <h1>一个人的信息</h1>
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <button @click="test">测试触发一下Demo组件的Hello事件</button>
  <slot name="qwe"></slot>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "Demo",
  props: ["school", "address"],
  emits: ["hello"],
  setup(props, context) {
    // console.log("---setup-----", props);
    // console.log("--setup--", context);
    // console.log("--setup--", context.attrs); //父组件传递过来但是子组件props没接收的属性,相当于vue2里面的this.$attrs
    // console.log("--setup--", context.emit); //相当于this.$emit  触发自定义事件
    console.log("--setup--", context.slots); //相当于vue2里面的this.$slot,收到插槽里面的内容

    // 数据

    let person = reactive({
      name: "张三",
      age: 18,
    });

    // 方法
    function test() {
      context.emit("hello", 666);
    }

    return {
      person,
      test,
    };
  },
};
</script>
