<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>在此脚手架下，你可以充分使用Typescript的静态检查和修饰器特性来安全，高效的来开发Vue应用。</p>
    <h3>Router</h3>
    <ul>
      <p>
        本脚手架集成了vue-route。<br>
        你可以在src/router.ts中查看如何通过两种方式（静态/懒加载）来注册路由。
      </p>
    </ul>
    <h3>装饰器特性</h3>
    <ul>
      <p>
        本脚手架使用装饰器来创建组件类，你可以通过 src/View 下的两个单文件组件来了解如何声明一个组件并且引用其他组件，并传入参数。<br>
        TODO：自定义事件
      </p>
    </ul>
    <h3>Vuex</h3>
    <ul>
      <p>
        本脚手架集成了Vuex。并且使用带有类型提示，自动补全和静态校验的方式来使用它。
        在src/store/test.module.ts你可以学习如何优雅的创建一个注入型的Vuex模块。<br>
        在src/components/Test.vue中你可以学习如何安全的使用Vuex来获得/更新状态。<br>
        同时你可以在src/components/Test.vue中看到如何使用Vuex来进行状态管理。<br>
        在本页面的Vuex选项卡，你可以打开Vue-Devtools来查看状态更新的情况。<br>
      </p>
    </ul>
    <h3>Mock</h3>
    <ul>
      <p>
        todo
      </p>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
