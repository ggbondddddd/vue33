<template>
  <h1>一个人的信息</h1>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h3>工作种类:{{ job.type }}</h3>
  <h3>工作薪水:{{ job.salary }}</h3>

  <button @click="changInfo">改变人的信息</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",

  setup() {
    // 数据
    // ref数据，把下面的张三给ref加工成了一个引用对象   这个对象叫RefImpl 你修改对象里面的值才可以更改响应式数据
    //RefImpl 是reference：引用+implement：实现的缩写
    let name = ref("张三");
    let age = ref(18);
    let job = ref({
      type: "前端工程师",
      salary: "30k",
    });

    // 方法   let changInfo = function changInfo() {} 这种写法也可以
    function changInfo() {
      name.value = "李四";
      age.value = 48;
      job.value.type = "ui工程师";
      job.value.salary = "20k";
    }
    return {
      name,
      age,
      changInfo,
      job,
    };
  },
};
</script>
