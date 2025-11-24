<script setup lang="ts">
import { getGlobalProviderConfig } from '@vben/provider';

const project = getGlobalProviderConfig('project');
</script>
<template>
  <div>share-page,这个是{{ project }}</div>
</template>
