isRef retorna un booleano

<script setup lang="ts">
import { type Ref, isRef, ref } from 'vue';

const numberRef: Ref<number> = ref(0);
const notRef: any = 0;

//-----------
const valueIsRef: boolena = isRef(numberRef);
const valueIsRef2: boolena = isRef(notRef);
</script>

<template>
  <p>isRef numberRef = {{ valueIsRef }}</p>
  <p>isRef notRef = {{ valueIsRef2 }}</p>
</template>

<style scoped></style>
