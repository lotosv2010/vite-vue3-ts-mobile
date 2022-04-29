<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores';
import { getUserInfo } from '@/apis/home';
import { useI18n } from 'vue-i18n';
import { Button } from 'vant';

const { t } = useI18n({ useScope: 'global' });

const home = ref('Home');
const store = useGlobalStore();
const { title, language } = storeToRefs(store);
</script>

<template>
  <div>
    <p>{{ home }}</p>
    <p>标题：{{ title }}</p>
    <p>语言：{{ language }}</p>
    <p>语言切换测试：{{ t('欢迎使用 vue-i18n') }}</p>
    <Button @click="store.setTitle('Dep_App')">setTitle</Button>
    <p><Button type="success" @click="getUserInfo">mock</Button></p>
  </div>
</template>

<style scoped lang="scss"></style>
