<template>
  <div>
    <p>这是一个全局Component</p>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class GlobalComponentTest extends Vue {}
</script>

<style scoped>
</style>
