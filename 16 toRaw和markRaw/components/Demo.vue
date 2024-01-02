<template>
  <h4>当前求和为{{ sum }}</h4>
  <button @click="sum++">点我sum++</button>
  <hr />
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salary }}K</h2>
  <h2 v-show="person.car">座驾信息:{{ person.car }}</h2>

  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">加工资</button>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人添加一台车</button>
  <button @click="person.car.name += '!'">换车名</button>
  <button @click="changePrice">换车价格</button>
</template>

<script>
import { reactive, ref, toRefs, toRaw, markRaw } from "vue";
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

    function showRawPerson() {
      // toRaw可以把响应式数据变为原生数据，也就是页面不会随着数据改变而变化了，只能改变reactive变为的响应式数据，但是不能改变ref变为的响应式数据
      // markRaw标记一个对象，使其永远不会成为响应式对象，应用场景，比如渲染一个极其复杂且多的数据的时候，如果这个数据不需要改变，用markRow就会跳过
      // 变为响应式,提高性能
      const p = toRaw(person);
      p.age++;
      console.log(p);
    }
    function addCar() {
      let car = { name: "奔驰", price: 40 };
      person.car = markRaw(car);
    }
    function changePrice() {
      person.car.price++;
      console.log(person.car.price);
    }
    return {
      sum,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar,
      changePrice,
    };
  },
};
</script>
