import { createStore } from 'vuex'
import i18n from '../locales'
import axios from 'axios'

const store = createStore({
  state() {
    return {
      language: 'be',
      networks: {
        twitter: 'https://twitter.com/RatioBelarus',
        mastodon: 'https://vkl.world/@ratio',
        email: 'ratio.belarus@gmail.com'
      },
      ratioFormLink:
        'https://docs.google.com/forms/d/e/1FAIpQLScFgIHcn-tjQENR3SkQXScn4HrlUxcV_LMEBN6Lu7UpCA8q9Q/viewform?pli=1',
      functionCards: [
        {
          title: i18n.global.t('subtitle.func.rules'),
          text: i18n.global.t('description.rules'),
          type: 'rules'
        },
        {
          title: i18n.global.t('subtitle.func.practice'),
          text: i18n.global.t('description.practice'),
          type: 'practice'
        },
        {
          title: i18n.global.t('subtitle.func.prize'),
          text: i18n.global.t('description.prize'),
          type: 'prize'
        },
        {
          title: i18n.global.t('subtitle.func.competition'),
          text: i18n.global.t('description.competition'),
          type: 'competition'
        }
      ],
      devCards: [
        {
          img: 'avatar.svg',
          name: 'Нік',
          position: 'Аўтар урокаў',
          networks: {
            twitter: '#',
            telegram: '#',
            instagram: '#'
          }
        },
        {
          img: 'avatar.svg',
          name: 'Алесь Вясёлка',
          position: 'Рэдактар урокаў',
          networks: {
            twitter: '#',
            telegram: '#'
          }
        },
        {
          img: 'avatar.svg',
          name: 'DzedBaradzed84',
          position: 'Распрацоўшчык (React)',
          networks: {
            twitter: '#',
            telegram: '#',
            instagram: '#',
            twitch: '#',
            github: '#',
            linkedin: '#'
          }
        },
        {
          img: 'avatar.svg',
          name: 'Ян Яновіч',
          position: 'Тэсціроўшчык'
        },
        {
          img: 'avatar.svg',
          name: 'deadbeathd07',
          position: 'Распрацоўшчык (Vue)'
        }
      ],
      formFields: {
        contact: null,
        message: null
      }
    }
  },
  mutations: {
    SET_FUNCTION_CARDS(state, newFunctionCards) {
      state.functionCards = newFunctionCards
    },
    SET_FORM_FIELDS(state, newFormFields) {
      state.formFields = newFormFields
    }
  },
  actions: {
    setFunctionCards({ commit }, newFunctionCards) {
      commit('SET_FUNCTION_CARDS', newFunctionCards)
    },
    setFormFields({ commit }, newFormFields) {
      commit('SET_FORM_FIELDS', newFormFields)
      // This origin point will need to be deleted in the future, as it is a test, and replace it with a valid one
      axios
        .post('https://qa-ratio-by.herokuapp.com/contact_us', newFormFields)
        .then(() => console.log('done'))
        .catch((err) => console.log(err))
    }
  }
})

export default store
