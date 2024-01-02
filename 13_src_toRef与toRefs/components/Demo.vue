<template>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salary }}K</h2>

  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">加工资</button>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    //1. 这个name1已经丢失了响应式，就好吧你let a=1  let b=a 然后改变a的值a=2,此时b的值还是1，并不会变为2，就是那个简单复杂数据类型的原因，如果这里的a是
    // 一个对象，你把a赋给b本质上是把a里面那个对象的地址赋给了b，本质上a也只是这个对象的一个地址罢了，只有这种情况会相互影响，没用丢失响应式。
    // const name1 = person.name;
    // console.log(name1);

    //2. toRef让没有ref的数据带有ref，也就是变为响应式，并且最关键的点在于这里name属性还是person里面的name，这个toRef里面偷偷的把这个name用get指回了
    // perosn里面的name,让这两个name之间还存在响应式
    // const name2 = toRef(person, "name");
    // console.log(name2);

    //3. 虽然可以如下这样直接ref，但是这里只是拿到person.name让这个属性被ref，这个name已经和person的name失去了响应式，互不影响了。
    // const name3=ref(person.name)

    // refs 让整个对象的属性都获得ref，但是只有第一层，如果某个属性是对象，不能直接使用这个对象里面的属性，而应该对象.属性，说白了这里的torefs
    // 就是让你直接可以些person里面第一层属性，比如正常写法person.name,用toRefs(person)，可以直接name获得这个属性
    // const name4 = toRefs(person);

    return {
      person,
      //  这里用拓展运算符的原因，一个对象里面不能直接放一个对象，可以放键值对，所以把这个对象展开,将里面的每一组键值对放在这里就行
      ...toRefs(person),
    };
  },
};
</script>
