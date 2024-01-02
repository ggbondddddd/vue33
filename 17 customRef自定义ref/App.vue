<template>
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { ref, customRef } from "vue";
export default {
  name: "App",

  setup() {
    // 自定义一个ref---名为myRef ,为什么有customRef，因为这就相当于手动挡车，里面你可以写很多不一样的逻辑，而ref时固定死的
    // 这个函数让keyword变为响应式数据，并且input框输入一定时间后下面的h3标签才会显现你输入的keyword
    function myRef(value, delay) {
      let timer;
      // track追踪数据，trigger通知从新解析模板，都是vue3给这个customRef自带的参数
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`有人从myRef中读取数据了,我把${value}给他了`);
            track(); //通知vue追踪数据的变化，提前和get商量让他认为这个value是有用的这是vue设计的
            return value;
          },
          set(newValue) {
            console.log(`有人把myRef中的数据修改为了${newValue}`);
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue; //将检测到的新修改的数据赋给了value
              trigger(); //通知vue从新解析模板，这是vue设计的
            }, delay);
          },
        };
      });
    }

    // let keyWord = ref("hello");//使用vue提供的ref
    let keyWord = myRef("hello", 500); //使用程序员自定义的ref

    return { keyWord };
  },
};
</script>
