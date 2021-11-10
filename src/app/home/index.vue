<script setup lang="ts">
import { ref } from 'vue';
import Header from './components/Header.vue';

defineProps<{ msg: string }>();
const count = ref(0);
</script>

<template>
  <Header />
  <h1>lhw{{ count }}</h1>
  <a-button type="primary"> Primary </a-button>
</template>
