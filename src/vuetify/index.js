import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import LogoIcon from '../components/icons/LogoIcon.vue'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: 'mdi',
    values: {
      logo: { component: LogoIcon }
    }
  }
})

export default vuetify
