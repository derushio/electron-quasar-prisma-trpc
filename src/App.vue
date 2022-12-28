<template>
  <router-view />
</template>

<script setup lang="ts">
import { useQueryProvider } from 'vue-query';

useQueryProvider();
</script>
