<template>
  <h2>当前求和为:{{ sum }}</h2>
  <button @click="sum++">点我加1</button>
  <hr />
  <h2>当前的信息为:{{ msg }}</h2>
  <button @click="msg += '!'">修改当前信息</button>
  <hr />
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>薪资:{{ person.job.j1.salary }}K</h2>

  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">加工资</button>
</template>

<script>
import { ref, reactive, watch } from "vue";
export default {
  name: "Demo",

  setup() {
    // 数据
    let sum = ref(0);
    let msg = ref("你好啊");
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    console.log(person);
    watch(sum, (newValue, oldValue) => {
      console.log("sum值变化了", newValue, oldValue);
    });

    //解决办法1: 这里的person对象被ref生成,就会生成一个refimpl:{}的对象,这样一个复杂数据类型我们想要监听就必须deep:true
    watch(
      person,
      (newValue, oldValue) => {
        console.log("person值变化了", newValue, oldValue);
      },
      { deep: true }
    );

    // 解决办法2:拿到person.value,由于person.value是ref借助了reactive生成的person对象,所以默认强制开启了深度监视deep:true,
    // 你打印出来就可以知道reactive生成的person和ref生成person的value值是一摸一样的
    // watch(person.value, (newValue, oldValue) => {
    //   console.log("person值变化了", newValue, oldValue);
    // });

    return {
      sum,
      msg,
      person,
    };
  },
};
</script>
