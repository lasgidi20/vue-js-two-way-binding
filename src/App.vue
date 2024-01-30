<template>
  <ChildComponent @bool="bool" :text="text"/>
</template>

<script setup>
  import ChildComponent from './components/ChildComponent.vue';
  import {ref} from 'vue';
  const bool = ref(true)
  const text = ref("Mike")
</script>
<style scoped>
</style>