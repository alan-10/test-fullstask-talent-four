<script setup lang="ts">
import { ref } from 'vue';
import { SytemPointApi } from '@/service/SystemPoint'
import { useToast } from "vue-toastification";
const toast = useToast();



const sytemPointApi = new SytemPointApi()
const registration = ref("");
const loading = ref(false);

function clearRegistration(){
  registration.value = ''
}

const onSubmit = async (event: any) => {
  loading.value = true
  const results = await event
  loading.value = true
  if (results.errors.length == 0) {
    try {
      await sytemPointApi.create(registration.value)
      toast.success('ponto efetuado com sucesso')
      clearRegistration()
    } catch (error) {
      toast.error('Error: não foi possivel bater o ponto')    
    }

  }

}


const validateregistration = [(value: any) => {
  if (!value) {
    return "Informe a registration"
  }
  return true;
}
]
</script>

<template>
  <VContainer fluid class="container-body">
    <v-app-bar :elevation="2">

      <v-app-bar-title>Sistema de Ponto Eletronico</v-app-bar-title>
    </v-app-bar>
    <div class="div-card">
      <v-card max-width="400px" hover>
        <VToolbar color="primary" dark title="Bater Ponto">

        </VToolbar>

        <v-card-subtitle>
          Informe a Matricula para bater o ponto
        </v-card-subtitle>

        <v-card-text>
          <v-form validate-on="submit lazy" @submit.prevent="onSubmit">

            <v-text-field v-model="registration" placeholder="Digite a registration " :rules="validateregistration"></v-text-field>

            <v-btn class="mt-2" text="Bater Ponto" color="primary" type="submit" block></v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </VContainer>
</template>

<style>
.container-body {
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.div-card {
  width: 500px;
  height: 500px;
}
</style>