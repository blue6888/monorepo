<script lang="ts" setup>
import { ref } from 'vue';

import { useElementPlusDesignTokens } from '@vben/hooks';
import { GlobalProvider } from '@vben/provider';

import { ElConfigProvider } from 'element-plus';

import { elementLocale } from '#/locales';

defineOptions({ name: 'App' });
const iq = ref('ele');
setTimeout(() => {
  iq.value = 'qqq';
}, 3000);
useElementPlusDesignTokens();
</script>

<template>
  <ElConfigProvider :locale="elementLocale">
    <GlobalProvider :project="iq">
      <RouterView />
    </GlobalProvider>
  </ElConfigProvider>
</template>
