<template>
  <h1>一个人的信息</h1>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>性别:{{ sex }}</h2>
  <button @click="sayhello">说话，vue3配置出来的</button>
  <button @click="sayWelcome">说话，vue2配置出来的</button>
  <br />
  <br />
  <button @click="test1">
    测试在vue2配置种读取vue3的的setup创建的数据和方法
  </button>
  <button @click="test2">测试在vue3配置种读取vue2创建的数据和方法</button>
</template>

<script>
import { h } from "vue";
export default {
  name: "App",
  // 在vue2里面我们在对象里面都是以key:value的形式写数据,
  data() {
    return {
      sex: "男",
    };
  },
  // methods是对象的时候里面要用键值对的写法,也就是赋值型写法，而如果methods是函数的时候呢，就要用声明式写法，也就是用变量接收
  methods: {
    // 这是匿名函数的写法,写法1
    // sayWelcome: function () {
    //   alert("欢迎");
    // },
    // 匿名函数的写法2,箭头函数
    // sayWelcome: () => {
    //   alert("欢迎");
    // },
    // 还有第三种写法，直接省略掉了冒号和function
    sayWelcome() {
      alert("欢迎");
    },
    test1() {
      console.log(this.sex);
      console.log(this.name);
      console.log(this.age);
      this.sayhello();
    },
  },

  // 此处只是测试setup，暂时不考虑响应式  setup: () => {}  setup: function () {}
  // 当setup用箭头函数写法或者赋值型写法的时候可以访问到this，这个时候vue2的数据就可以访问到，而用声明式写法的时候就拿不到
  setup() {
    // 数据
    let name = "张三";
    let age = 18;

    // 方法  并且这里不能sayhello:()=>{},因为这是匿名函数写法
    function sayhello() {
      alert(`我叫${name},我${age}岁了`);
    }

    // vue3这里是在函数体里面，所以也可以这样构造函数，以变量的形式接收匿名函数 ,这个匿名函数也可用箭头函数写法写，不报错
    // let sayhello = function () {
    //   alert(`我叫${name},我${age}岁了`);
    // };

    function test2() {
      console.log(this.sex); //undefined
      console.log(name);
      console.log(age);
      console.log(this.sayWelcome); //undefined
    }

    // 这里必须返回
    return {
      // 这里返回值也是将上面定义的赋给一个属性，如name:name 触发了简写形式
      name,
      age,
      sayhello,
      test2,
    };

    // 返回一个渲染函数 这里的h和vue2里面的h是一样的，vue3由于没有引入整个vue,所以需要在这里引入h从vue里面
    // vue2里面的render: h => h(App) 意思就是渲染引入的App组件的意思吧,下面写法就只渲染下面这个h1,上面模板里面的参数全部页面不渲染
    // return () => h("h1", "尚硅谷");
  },
};
</script>
