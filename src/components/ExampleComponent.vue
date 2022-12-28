<template>
  <div>{{ userQuery.data }}</div>
</template>

<script setup lang="ts">
import { useTrpc } from 'src/domains/trpc/useTrpc';

import { useQuery } from 'vue-query';

const trpc = useTrpc();

const userQuery = useQuery(['userQuery'], () => trpc.getUser.query());
</script>
