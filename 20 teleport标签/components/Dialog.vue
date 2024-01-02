<template>
  <div>
    <button @click="isShow = true">点我弹个窗</button>
    <!--teleport标签，to可以改变里面包裹内容的父组件吧，就是让他的父组件直接是body，样式也就是基于body了  -->
    <teleport to="body">
      <div class="mask" v-if="isShow">
        <div class="dialog">
          <h3>我是一个弹窗</h3>
          <h4>一些内容</h4>
          <h4>一些内容</h4>
          <h4>一些内容</h4>
          <button @click="isShow = false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Dialog",
  setup() {
    let isShow = ref(false);

    return {
      isShow,
    };
  },
};
</script>
<style>
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.5);
}
.dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  /* 这个50%是参考自身，上面50%是参考他定位的元素 */
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background-color: skyblue;
  text-align: center;
}
</style>
