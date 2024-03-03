<script setup lang="ts">
</script>


<template >
  <div>
    <v-app>
      <v-container style="margin: auto;">
        <v-row align="center">
          <v-col cols="12">
            <h1 class="text-center">Sistema de Ponto</h1>
          </v-col>
        </v-row>
        <v-row justify="center">
          <RouterLink to="/actionPoint">
            <v-btn size="x-large">
              <v-card-title>Client</v-card-title>
            </v-btn>
          </RouterLink>

          <RouterLink to="/Layout">
            <v-btn size="x-large">
              <v-card-title>Adimin</v-card-title>
            </v-btn>
          </RouterLink>

        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<style></style>