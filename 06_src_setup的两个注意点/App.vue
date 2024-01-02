<template>
  <Demo school="尚硅谷" address="北京" @hello="showHelloMsg">
    <!-- 具名插槽在父组件有两种写法,第一种slot='',在vue3有兼容问题,v-slot:就没用所以推荐用这个 -->
    <template v-slot:qwe>
      <span>尚硅谷</span>
    </template>
    <template v-slot:asd>
      <span>尚硅谷</span>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: {
    Demo,
  },
  setup() {
    function showHelloMsg(value) {
      alert(`你好,你触发了hello事件,我收到的参数是${value}`);
    }
    return {
      showHelloMsg,
    };
  },
};
</script>
