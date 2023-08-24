import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './vuetify'
import { createI18n } from 'vue-i18n'
import messages from './locales/messages'
import './assets/styles/index.css'
import LogoIcon from './components/icons/LogoIcon.vue'
import RulesIcon from './components/icons/RulesIcon.vue'
import PracticeIcon from './components/icons/PracticeIcon.vue'
import PrizeIcon from './components/icons/PrizeIcon.vue'
import CompetitionIcon from './components/icons/CompetitionIcon.vue'

const app = createApp(App)

const i18n = createI18n({
  locale: 'be',
  messages: messages
})

app.component('logo-icon', LogoIcon)
app.component('rules-icon', RulesIcon)
app.component('practice-icon', PracticeIcon)
app.component('prize-icon', PrizeIcon)
app.component('competition-icon', CompetitionIcon)

app.use(router).use(store).use(vuetify).use(i18n)

app.mount('#app')
