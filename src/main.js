import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './vuetify'
import { createI18n } from 'vue-i18n'
import messages from './locales/messages'

const app = createApp(App)

const i18n = createI18n({
  locale: 'be',
  messages: messages
})

app.use(router).use(store).use(vuetify).use(i18n)

app.mount('#app')
