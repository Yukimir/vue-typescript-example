<template>
  <div>
    <p>Count * 10 = {{Count}}</p>
    <p @click="onClick">点击这里可以让count + 5</p>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import TestModule from '../store/test.module';
@Component
export default class Test extends Vue {
  // 通过getModule来获得先前注册的VuexModule对象
  private test = getModule(TestModule);

  private onClick() {
    // 触发mutation
    this.test.increment(5);
  }

  get Count() {
    // 获取状态，并且使用计算属性的方式来订阅这个状态的变更。
    return this.test.count * 10;
  }
}
</script>

<style scoped>
</style>
