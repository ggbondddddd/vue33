// 引入的不再是Vue构造函数（需要用new来构造实例 如vue2就是new vue{}），引入的是一个名为createApp的工厂函数，可以直接调，不需要new
import { createApp } from 'vue'
import App from './App.vue'
// 之前vue2创建的两种不同写法
// 1. new Vue({ el:'#app',render：h=> h(App) })  
// 2.不想用el,
//  new Vue({render：h=> h(App)}).$mount('#app) 
// 也可以像下面用变量接收
// const vm=new Vue({
// render：h=> h(App)
// })  
// vm.$mount('#app) 

// 创建应用实例对象  app（类似于之前vue2中的vm，但是app比vm更轻，里面的东西更少）
const app = createApp(App)
// 这里是挂载
app.mount('#app')
// createApp(App).mount('#app')

