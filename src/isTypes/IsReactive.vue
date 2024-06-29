<script setup lang="ts">
import { reactive, isReactive } from 'vue';

interface objetoNombre {
  nombre: string;
}

const myobj: objetoNombre = {
  nombre: 'lenin',
};
const myReactive: objetoNombre = reactive({
  nombre: 'lenin',
});

const valueIsreacive: boolena = isReactive(myReactive);
const valueIsreacive2: boolena = isReactive(myobj);
</script>

<template>
  <p>reactive myReactive = {{ valueIsreacive }}</p>
  <p>reactive myobj = {{ valueIsreacive2 }}</p>
</template>

<style scoped></style>
