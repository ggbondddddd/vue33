<template>
  <h1>一个人的信息</h1>
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2 v-show="person.sex">性别:{{ person.sex }}</h2>

  <h3>工作种类:{{ person.job.type }}</h3>
  <h3>工作薪水:{{ person.job.salary }}</h3>
  <h3>爱好:{{ person.hobby }}</h3>

  <h3>测试的数据c:{{ person.job.a.b.c }}</h3>

  <button @click="changInfo">改变人的信息</button>
  <button @click="addSex">添加一个sex属性</button>
  <button @click="deleteSex">删除刚刚添加的sex属性</button>
</template>
<!-- 总结，reactive只能用于复杂数据类型，如果想要修改一个复杂数据，也可用ref，只不过比直接用reactive多一个步骤，比如对象a{b:1}
    用ref做就需要a.value.b=3才能修改，而用reactive直接a.b=3即可 -->
<script>
import { ref, reactive } from "vue";
export default {
  name: "App",

  setup() {
    // 数据
    // let name = ref("张三");原本修改数据需要name.value= 放在reactive处理的对象里面可以直接不写value，更加语义化
    // 由于reactive不能处理简单类型，我们可以用一种方法，直接将上面全部数据放在一个对象里面不就行了
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        type: "前端工程师",
        salary: "30k",
        a: {
          b: {
            c: 666,
          },
        },
      },
      hobby: ["抽烟", "喝酒", "烫头"],
    });

    // 方法
    function changInfo() {
      person.name = "李四";
      person.age = 48;
      // 这里和ref的区别，不用中间的.value
      person.job.type = "ui工程师";
      person.job.salary = "20k";
      person.job.a.b.c = 999;
      person.hobby[0] = "学习";
    }
    function addSex() {
      person.sex = "男";
    }
    function deleteSex() {
      delete person.sex;
    }
    return {
      person,
      changInfo,
      addSex,
      deleteSex,
    };
  },
};
</script>
