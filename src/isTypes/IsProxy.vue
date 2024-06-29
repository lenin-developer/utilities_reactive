<script setup lang="ts">
import { readonly, reactive, isProxy } from 'vue';

interface animal {
  nombre: string;
}

const perroProxy: animal = readonly({ nombre: 'perro' });
const valueIsProxyReadonly: boolean = isProxy(perroProxy);

const gatoProxy: animal = reactive({ nombre: 'gato' });
const valueIsProxyReactive: boolean = isProxy(gatoProxy);
</script>

<template>
  <p>isReadonly perroProxy = {{ valueIsProxyReadonly }}</p>
  <p>isReadonly gatoProxy = {{ valueIsProxyReactive }}</p>
</template>

<style scoped></style>
