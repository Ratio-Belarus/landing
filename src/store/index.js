import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state() {
    return {
      endpoint: 'https://qa-ratio-by.herokuapp.com',
      widthClient: null,
      networks: {
        twitter: 'https://twitter.com/RatioBelarus',
        mastodon: 'https://vkl.world/@ratio',
        email: 'ratio.belarus@gmail.com'
      },
      ratioFormLink:
        'https://docs.google.com/forms/d/e/1FAIpQLScFgIHcn-tjQENR3SkQXScn4HrlUxcV_LMEBN6Lu7UpCA8q9Q/viewform?pli=1',
      devCards: [
        {
          img: 'avatar.svg',
          name: 'Plistačka',
          position: 'Распрацоўшчыца (Python, React Native), менеджар праекта, дызайнер',
          networks: {
            twitter: 'https://twitter.com/plistacka',
            github: 'https://github.com/Plistachka',
            mastodon: 'https://vkl.world/@plistachka',
            patreon: 'https://www.patreon.com/plistachka'
          }
        },
        {
          img: 'avatar.svg',
          name: 'deadbeathd07',
          position: 'Распрацоўшчыца (Vue, Laravel)',
          networks: {
            github: 'https://github.com/deadbeathd07'
          }
        }
      ],
      formFields: {
        contact: null,
        message: null
      }
    }
  },
  mutations: {
    SET_WIDTH_CLIENT(state, newWidthClient) {
      state.widthClient = newWidthClient
    },
    SET_FUNCTION_CARDS(state, newFunctionCards) {
      state.functionCards = newFunctionCards
    },
    SET_FORM_FIELDS(state, newFormFields) {
      state.formFields = newFormFields
    }
  },
  actions: {
    setWidthClient({ commit }, newWidthClient) {
      commit('SET_WIDTH_CLIENT', newWidthClient)
    },
    setFunctionCards({ commit }, newFunctionCards) {
      commit('SET_FUNCTION_CARDS', newFunctionCards)
    },
    setFormFields({ commit, state }, newFormFields) {
      commit('SET_FORM_FIELDS', newFormFields)
      axios.post(state.endpoint + '/contact_us', newFormFields)
    }
  }
})

export default store
