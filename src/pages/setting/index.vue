<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { Button } from 'vant';

const { t, locale } = useI18n({ useScope: 'global' });

const change = (type: string) => {
  locale.value = type; // change!
};

const setting = ref('Setting');
</script>

<template>
  <div>
    <p>{{ setting }}</p>
    <p>语言切换测试：{{ t('欢迎使用 vue-i18n') }}</p>
    <Button @click="change('zh')">{{ t('切换到中文') }}</Button>
    <Button @click="change('en')">{{ t('切换到英文') }}</Button>
    <Button @click="change('ja')">{{ t('切换到日文') }}</Button>
  </div>
</template>

<style scoped lang="scss"></style>
