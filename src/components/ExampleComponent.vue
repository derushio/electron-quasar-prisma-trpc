<template>
  <div>{{ userQuery.data.value }}</div>
</template>

<script setup lang="ts">
import { trpc } from 'src/domains/trpc/trpc.js';

import { useQuery } from 'vue-query';

const userQuery = useQuery(['userQuery'], () => trpc.getUser.query());
</script>
