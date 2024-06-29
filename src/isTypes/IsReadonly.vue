<script setup lang="ts">
import { readonly, isReadonly } from 'vue';

interface animal {
  nombre: string;
}

const perroLectura: animal = readonly({ nombre: 'perro' });
const valueIsReaonly: boolean = isReadonly(perroLectura);

const myAnimal: animal = { nombre: 'perro' };
const valueIsReaonly2: boolean = isReadonly(myAnimal);
</script>

<template>
  <p>isReadonly perroLectura = {{ valueIsReaonly }}</p>
  <p>isReadonly myAnimal = {{ valueIsReaonly2 }}</p>
</template>

<style scoped></style>
