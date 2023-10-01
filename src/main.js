import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './vuetify'
import i18n from './locales'
import './assets/styles/index.css'
import LogoIcon from './components/icons/LogoIcon.vue'
import RulesIcon from './components/icons/RulesIcon.vue'
import PracticeIcon from './components/icons/PracticeIcon.vue'
import PrizeIcon from './components/icons/PrizeIcon.vue'
import CompetitionIcon from './components/icons/CompetitionIcon.vue'
import TelegramIcon from './components/icons/TelegramIcon.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

const app = createApp(App)

app.component('logo-icon', LogoIcon)
app.component('rules-icon', RulesIcon)
app.component('practice-icon', PracticeIcon)
app.component('prize-icon', PrizeIcon)
app.component('competition-icon', CompetitionIcon)
app.component('telegram-icon', TelegramIcon)
app.component('font-awesome-icon', FontAwesomeIcon)

library.add(fab)

app.use(router).use(store).use(vuetify).use(i18n)

app.mount('#app')
