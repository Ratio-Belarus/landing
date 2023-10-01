import { createI18n } from 'vue-i18n'
import messages from './messages'

const i18n = createI18n({
  locale: localStorage.lang ? localStorage.lang : 'be',
  fallbackLocale: 'be',
  messages: messages
})

export default i18n
