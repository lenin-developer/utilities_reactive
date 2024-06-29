<script setup lang="ts">
import { useGps } from './useComposibleWhitToRefs.ts';
const { x, y } = useGps();
</script>

<template>
  <p>x {{ x }}</p>
  <p>y {{ y }}</p>
</template>

<style scoped></style>
