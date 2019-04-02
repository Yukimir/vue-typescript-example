<template>
  <div class="about">
    <h1>Vuex测试页面</h1>
    <Test></Test>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Test from '../components/Test.vue';

@Component({
  components: {
    Test,
  },
})
export default class VuexTest extends Vue {
  private msg = 'Hello World';
}
</script>
