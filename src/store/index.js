import { createStore } from 'vuex'
import i18n from '../locales'

const store = createStore({
  state() {
    return {
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
      state.formFields = JSON.parse(newFormFields)
    }
  },
  actions: {
    setFunctionCards({ commit }, newFunctionCards) {
      commit('SET_FUNCTION_CARDS', newFunctionCards)
    },
    setFormFields({ commit }, newFormFields) {
      commit('SET_FORM_FIELDS', newFormFields)
    }
  }
})

export default store
