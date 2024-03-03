<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>


<template>
  <div>
    <VApp>
      <v-main>

        <RouterView />
      </v-main>
    </VApp>

  </div>
</template>
  
<style scoped>
.linkNave {
  text-decoration: none;
  color: #000000;
}
</style>


