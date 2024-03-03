<script setup lang="ts">
import { ref } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { UserService } from '@/service/UserService'
import { email, required } from '@vuelidate/validators'
import type { User, CreateUser } from '@/interface/User';
import { onMounted } from 'vue';
import { useToast } from "vue-toastification";
const toast = useToast();

const dialog = ref(false);
const isCreatingUser = ref(false)
const userService = new UserService();
const user = ref<CreateUser>({
  name: "",
  email: "",
});
const listUser = ref<User[]>([]);

const rules = {
  name: { required },
  email: { required, email }
}

const v$ = useVuelidate<CreateUser>(rules, user.value)


onMounted(async () => {
  load();
})


function openModal() {
  v$.value.$reset();
  dialog.value = true;
}


function newUser() {
  v$.value.$reset();
  isCreatingUser.value = true;
  clearUser();

  openModal()
}


function clearUser() {
  user.value.email = "";
  user.value.name = "";
}


function closeModal() {
  dialog.value = false;
  v$.value.$reset();
}

async function load() {
  listUser.value = await userService.findAll();
}

async function preEdite(id?: string) {
  v$.value.$reset()
  isCreatingUser.value = false
  if (!id) return
  user.value = await userService.findByID(id);

  openModal()
}



async function save() {
  v$.value.$validate().then(async () => {
    console.log('error', v$.value.$errors)
    console.log(user.value);

    // if (!(v$.value.$errors.length > 0)) {

    console.log('iscreating user', isCreatingUser.value);

    if (isCreatingUser.value) {
      await userService.save(user.value);
      toast.success('Usuário criado com sucesso!')
    }


    if (!isCreatingUser.value) {
      await userService.update({ name: user.value.name, id: user.value.id, email: user.value.email })
      toast.success('Usuário atualizado com sucesso!')
    }

    closeModal()
    load();
    // }
  })
}


async function deleteUser(id?: string) {
  

  if (!id) return

  try {
    await userService.delete(id);
    toast.success('Usuário deletado')
   
    load();
  } catch (error) {
    toast.error( `Não foi possível deletar usuário, 
     possue registros de pontos`)
  }
}

</script>
<template>
  <VContainer>
    <VRow>
      <VCol cols="12" md="2">
        <VBtn block color="primary" @click="newUser"> Novo</VBtn>
      </VCol>
    </VRow>
    <v-table style="height: 80vh;">
      <thead>
        <tr>
          <th class="text-left">
            #id
          </th>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Matricula
          </th>
          <th class="text-left">
            Email
          </th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="itemUser in listUser" :key="itemUser.id">
          <td>{{ itemUser.id }}</td>
          <td>{{ itemUser.name }}</td>
          <td>{{ itemUser.registration }}</td>
          <td>{{ itemUser.email }}</td>

          <td>
            <VBtn color="primary" variant="text" @click="preEdite(itemUser.id)" icon="mdi-pencil-outline"></VBtn>
            <VBtn color="error" variant="text" icon="mdi-delete" @click="deleteUser(itemUser.id)"></VBtn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <v-dialog v-model="dialog" max-width="700" max-height="700" persistent>
      <v-card>
        <VToolbar title="Formulario" color="primary" dark />
        <v-card-text>
          <VContainer>
            <v-text-field v-model="user.name" :counter="10"
              :error-messages="v$.name.$errors.map(e => !user.name && e.$message)" label="Name"></v-text-field>

            <v-text-field v-model="user.email" :error-messages="v$.email.$errors.map(e  => !user.email && e.$message)"
              label="E-mail"></v-text-field>



          </VContainer>
        </v-card-text>
        <VCardActions>
          <v-btn color="error" @click=" dialog = false;">
            Cancelar
          </v-btn>

          <v-btn @click="save" color="primary">
            {{ isCreatingUser ? 'Salvar' : 'Editar' }}
          </v-btn>
        </VCardActions>
      </v-card>
    </v-dialog>
  </VContainer>
</template>