<script setup lang="ts">
import { reactive, toRef } from 'vue';

interface Icompu {
  ram: number;
  disco: number;
}

const computadora: Icompu = reactive({
  ram: 18,
  disco: 500,
});

// esto crea un clon que refleja los cambios de la fuente original, pero esta copia no puede mutar
const computadoraClon = toRef(computadora);
// esto crea una referencia que actua como espejo si se modifica la fuente o la copia ambas cambian
const disco = toRef(computadora, 'disco');

disco.value++;
computadora.disco++;

computadoraClon.ram++; // esto no hace nada
computadora.ram++; // este si muta tambien a la copia
</script>

<template>
  <p>computadoraClon.ram {{ computadoraClon.ram }}</p>
  <p>computadora.ram {{ computadora.ram }}</p>

  <p>computadora.disco {{ computadora.disco }}</p>
  <p>disco {{ disco }}</p>
</template>

<style scoped></style>
