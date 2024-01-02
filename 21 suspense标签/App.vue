<template>
  <div class="app">
    <h3>我是App组件</h3>
    <!-- Suspense是vue3默认的标签，里面默认放了两个插槽，名字如下，如果用动态引入，也就是按需引入时，由于网速过慢，按需引入的组件没用引入回来之前
    显示下面第二个插槽v-slot:fallback里面的内容,使用了这个标签，这个标签包裹的子组件并且这个子组件在父组件里时动态引入的，那么子组件的setup就可以
    使用promise，这样我们就可以自己子组件展示出来的时机，所以使用Suspense可以在网速慢或者子组件setup需要使用peomise的时候使用 -->
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h3>稍等，加载中</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from "./components/Child";  //静态引入
import { defineAsyncComponent } from "vue";
const Child = defineAsyncComponent(() => import("./components/Child.vue")); //动态引入，类似于路由懒加载的做法，按需引入，所以一定比app组件出来慢
export default {
  name: "App",
  components: {
    Child,
  },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
