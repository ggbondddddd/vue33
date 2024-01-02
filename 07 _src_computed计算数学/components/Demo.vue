<template>
  <h1>一个人的信息</h1>
  姓:<input type="text" v-model="person.firstName" />
  <br />
  名:<input type="text" v-model="person.lastName" />
  <br />
  <span>全名:{{ person.fullName }}</span>
  <br />
  全名:<input type="text" v-model="person.fullName" />
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    let person = reactive({
      firstName: "张",
      lastName: "三",
      age: 18,
    });

    // 计算属性---简写形式(没用考虑计算属性被修改的情况,就比如让一个input框双向绑定这个属性,修改input框里面内容,那就会报错了)
    // person.fullName = computed(() => {
    //   return person.firstName + "-" + person.lastName;
    // });

    // 计算数学完整写法(考虑读和写) vue2的完整写法也是这样的
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(value) {
        const nameArr = value.split("-");
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      },
    });

    return {
      person,
    };
  },
};
</script>
