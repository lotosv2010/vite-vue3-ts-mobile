<script setup lang="ts">
import { ref } from 'vue';
import router from '@/routes';
import { Tabbar, TabbarItem } from 'vant';

const active = ref('dashboard');

const home = () => {
  router.push('home');
};
const dashboard = () => {
  router.push('/');
};
const setting = () => {
  router.push('/setting');
};
</script>

<template>
  <div class="layout">
    <router-view></router-view>
    <Tabbar v-model="active">
      <TabbarItem name="dashboard" icon="home-o" @click="dashboard">标签</TabbarItem>
      <TabbarItem name="home" icon="search" @click="home">标签</TabbarItem>
      <TabbarItem name="friends" icon="friends-o">标签</TabbarItem>
      <TabbarItem name="setting" icon="setting-o" @click="setting">标签</TabbarItem>
    </Tabbar>
  </div>
</template>

<style scoped lang="scss">
.layout {
  padding-bottom: 50px;
}
</style>
