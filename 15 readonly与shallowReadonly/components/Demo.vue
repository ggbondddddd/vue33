<template>
  <h4>当前求和为{{ sum }}</h4>
  <button @click="sum++">点我sum++</button>
  <hr />
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salary }}K</h2>

  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">加工资</button>
</template>

<script>
import { reactive, ref, toRefs, readonly, shallowReadonly } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据

    let sum = ref(0);

    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    //readonly让整个响应式变为只读，也就是无法修改 shallowReadonly让响应式数据第一层变为只读，深层的不受影响依然可以修改数据
    // person = readonly(person);
    // person = shallowReadonly(person);
    // sum = shallowReadonly(sum);
    sum = readonly(sum);

    return {
      sum,
      ...toRefs(person),
    };
  },
};
</script>
