<template>
<v-app-bar :elevation="2">
  <template v-slot:prepend>
    <v-app-bar-nav-icon @click="menuStore.updateDrawer"> 

    </v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>System Point</v-app-bar-title>
</v-app-bar></template>
<script setup lang="ts">
import { useMenuStore } from '@/stores/menu';
const menuStore = useMenuStore();

</script>