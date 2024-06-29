<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import IsRef from './isTypes/IsRef.vue';
import IsReactive from './isTypes/IsReactive.vue';
import IsReadonly from './isTypes/IsReadonly.vue';
import IsProxy from './isTypes/IsProxy.vue';
import UnRef from './unref/UnRef.vue';
import ToRef from './toFuntionReactive/ToRef.vue';
import ToRefs from './toFuntionReactive/ToRefs.vue';
</script>

<template>
  <HelloWorld />
  <h1>is reactive funtions</h1>
  <h2>isRef</h2>
  <IsRef />
  <h2>isReactive</h2>
  <IsReactive />
  <h2>isReadonly</h2>
  <IsReadonly />
  <h2>isProxy</h2>
  <IsProxy />
  <h1>un funtion</h1>
  <h2>unref</h2>
  <UnRef />
  <h1>to funtion reactive</h1>
  <h2>toRef</h2>
  <ToRef />
  <h2>toRefs</h2>
  <ToRefs />
</template>

<style scoped></style>
