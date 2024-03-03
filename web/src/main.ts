

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Toast  from "vue-toastification";
import "vue-toastification/dist/index.css";

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
app.use(Toast)
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
