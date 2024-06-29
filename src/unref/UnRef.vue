<script setup lang="ts">
import { type Ref, ref, reactive, unref } from 'vue';

const carro: Ref<string> = ref('subaru');
const valueUnref = unref(carro);

const cualquierValor = 'un texto';
const valueUnrefText = unref(cualquierValor);

const colorReactive = reactive({ color: 'azul' });
const valueUnrefreactive = unref(colorReactive);
</script>

<template>
  <p>unref ref = {{ valueUnref }}</p>
  <p>unref text = {{ valueUnrefText }}</p>
  <p>unref reactive = {{ valueUnrefreactive }}</p>
</template>

<style scoped></style>
