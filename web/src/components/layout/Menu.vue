<template>
  <v-navigation-drawer v-model="menuStore.$state.drawer" temporary>
    <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg" title="Usuario Logado"></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <RouterLink class="linkNave" to="/sytemPoint"> <v-list-item prepend-icon="mdi-view-dashboard" title="Pontos"
          value="home"></v-list-item></RouterLink>
      <RouterLink class="linkNave" to="/Users"><v-list-item prepend-icon="mdi-forum" title="Usuários"
          value="Usuario"></v-list-item></RouterLink>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { useMenuStore } from '@/stores/menu';
const menuStore = useMenuStore();



</script>


<style>
.linkNave {
  color: #333;
  text-decoration: none;
  text-decoration-style: double;
  text-decoration-color: currentcolor;
}
</style>