<script setup lang="ts">
const variants = ['tonal', 'outlined']
</script>


<template >
  <div>

    <VContainer>
      <VCardTitle>Sistema Bater Ponto</VCardTitle>
    </VContainer>
    <v-container class="sm-auto" style="height: 100vh; display: flex;justify-content: center; align-items: center;">




      <v-card-actions>
        <RouterLink to="/Layout"><v-btn size="x-large"> Adimin </v-btn></RouterLink>
      </v-card-actions>

      <v-card-actions>
        <RouterLink to="/actionPoint"><v-btn size="x-large"> Client </v-btn></RouterLink>
      </v-card-actions>


    </v-container>
  </div>
</template>

