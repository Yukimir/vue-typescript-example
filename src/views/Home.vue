<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- :msg 是v-bind:msg的简写。v-bind:msg用来将一个表达式传给msg -->
    <!-- 而msg="title" 只会将字符串'title'传给msg-->
    <HelloWorld :msg="title"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private title = '欢迎来到 Vue + Vuex + Mock + Typescript 脚手架';
}
</script>
