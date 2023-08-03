import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './vuetify'

const app = createApp(App)

app.use(router).use(store).use(vuetify)

app.mount('#app')
