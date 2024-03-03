<template>
<v-layout class="rounded rounded-md" style="width: 100%;">
<Header></Header>
<Menu></Menu>
<v-main  style="height: 100vh;">
  <RouterView></RouterView>
    </v-main>
  </v-layout>
</template>
<script setup lang="ts">
import Header from './Header.vue';
import Menu from './Menu.vue';
</script>