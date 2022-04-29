<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores';
import { getMapData, getDashboardInfo } from '@/apis/dashboard';
import { useI18n } from 'vue-i18n';
import { Button, Icon } from 'vant';
import { useTitle } from '@/hooks';

useTitle();

const { t } = useI18n({ useScope: 'global' });

const store = useGlobalStore();
const { title, language } = storeToRefs(store);
const dashboard = ref('Dashboard');

const getMap = async () => {
  const data = await getMapData();
  console.log(data);
};

onMounted(() => {
  store.setLanguage('en');
  dashboard.value = 'Dashboard !!!';
});
</script>

<template>
  <div>
    <p>{{ dashboard }}</p>
    <p>标题：{{ title }}</p>
    <p>语言：{{ language }}</p>
    <Icon name="fire-o" color="#ee0a24" />
    <p>语言切换测试：{{ t('欢迎使用 vue-i18n') }}</p>
    <p><Button type="warning" @click="getMap">axios</Button></p>
    <p><Button type="danger" @click="getDashboardInfo">mock</Button></p>
  </div>
</template>

<style scoped lang="scss"></style>
