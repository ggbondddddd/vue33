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
    //情况1: 监听ref定义的响应式数据
    // watch(sum, (newValue, oldValue) => {
    //   console.log("sum的值变化了", newValue, oldValue);
    // },{immediate:true});

    // 情况2:监视ref所定义的多个响应式数据   用数组包裹需要监视的属性
    // watch(
    //     [sum, msg],
    //     (newValue, oldValue) => {
    //         console.log("sum或msg的值变化了", newValue, oldValue)
    //     },
    //     { immediate: true }
    // )

    // 情况3:监视reactive所定义的一个响应式数据,有问题,
    // 1.此处无法获取正确的oldValue
    // 2.强制开启了深度监视,并且这个深度监视无法通过deep配置关闭
    // watch(person, (newValue, oldValue) => {
    //   console.log("person变化了", newValue, oldValue);
    // },{deep:false}); //此处的deep配置无效

    // 情况4:监视reactive所定义的一个响应式数据中的某一个属性  watch第一个配置项需要写为函数形式,把你需要监视的属性return回来
    // 这里由于监视的是简单数据类型,所以可以获得正确的oldValue
    // watch(
    //   () => person.age,
    //   (newValue, oldValue) => {
    //     console.log("person的age变化了", newValue, oldValue);
    //   }
    // );

    // 情况5:监视reactive所定义的一个响应式数据中的某一些个属性   用数组包裹需要监视的被函数return的属性
    // watch([() => person.age, () => person.name], (newValue, oldValue) => {
    //   console.log("person的age或name变化了", newValue, oldValue);
    // });

    // 特殊情况:监视reactive定义的对象里面的复杂数据类型,这里没有像监视reactive定义的数据的时候一样强制给你开启了深度监视
    // 需要我们自己手动开启deep:true才可以监视到复杂数据类型,而为什么person其他属性不需要开启,很简单,因为这些属性都只是字符串,是简单数据类型
    watch(
      () => person.job,
      (newValue, oldValue) => {
        console.log("person的job变化了", newValue, oldValue);
      },
      { deep: true } //此处监视的是reactive定义的对象里面的某一个属性,deep配置有效
    );

    return {
      sum,
      msg,
      person,
    };
  },
};
</script>
