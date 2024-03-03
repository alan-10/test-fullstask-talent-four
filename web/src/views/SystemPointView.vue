<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { SytemPointApi } from '@/service/SystemPoint';
import type { SystemPoint, SystemPointWithUser } from '@/interface/SiystemPoint'

const sytemPointApi = new SytemPointApi()

const points = ref<SystemPointWithUser[]>([{
  userEmail: '',
  userName: '',
  pointDate: '',
  pointEntry: '',
  pointId: '',
  pointExit: '',
}])


onMounted(async () => {
  await loadPoints()
})

async function loadPoints() {
  points.value = await sytemPointApi.list()
}

</script>


<template>
  <VContainer>
    <v-table style="height: 80vh">
      <thead>
        <tr>
          <th class="text-left">
            #id
          </th>
          <th class="text-left">
            Nome funcionário
          </th>
          <th class="text-left">
            Email funcionário
          </th>
          <th class="text-left">
            Dia
          </th>
          <th class="text-left">
            Hora Ponto Chegada
          </th>
          <th class="text-left">
            Hora Ponto Saída
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in points" :key="item.pointId">
          <td>{{ item.pointId }}</td>
          <td>{{ item.userName }}</td>
          <td>{{ item.userEmail }}</td>
          <td>{{ item.pointDate }}</td>
          <td>{{ item.pointEntry }}</td>
          <td>{{ item.pointExit }}</td>
        </tr>
      </tbody>
    </v-table>
  </VContainer>
</template>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
