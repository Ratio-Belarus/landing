import { createI18n } from 'vue-i18n'
import messages from './messages'
import store from '../store'

const language = store.state.language

const i18n = createI18n({
  locale: language,
  fallbackLocale: 'be',
  messages: messages
})

export default i18n
