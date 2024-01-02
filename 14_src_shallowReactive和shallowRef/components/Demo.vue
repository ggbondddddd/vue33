<template>
  <h4>当前x的值是：{{ x.y }}</h4>
  <button @click="x = { y: 888 }">点我替换x</button>
  <button @click="x.y++">点我x.y+1</button>
  <hr />
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ person.job.j1.salary }}K</h2>

  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="person.job.j1.salary++">加工资</button>
</template>

<script>
import { reactive, ref, toRefs, shallowReactive, shallowRef } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    // shallowReactive和reactive区别，shallowReactive只让第一层数据具有响应式，如name，age，job这个对象，但是job这个对象里面的数据没用响应式
    // reactive会让数据里面所有层次都具有响应式
    // let person = shallowReactive({
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    // ref和shallowRef里面如果传递的是简单数据类型，那么是一样的，但是shallowRef无法处理传进来的是对象这种复杂数据类型，而ref可以，ref内部会求助
    // reactive帮助你将这个对象变为proxy实例对象，处理为响应式，shallowRef并没用这一步操作，生成的value还是普通的对象
    let x = shallowRef({
      y: 0,
    });

    return {
      x,
      person,
      ...toRefs(person),
    };
  },
};
</script>
