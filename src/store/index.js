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
          name: 'Нік',
          position: 'Аўтар урокаў',
          socNet: {
            twitter: '#',
            telegram: '#',
            instagram: '#'
          }
        },
        {
          name: 'Алесь Вясёлка',
          position: 'Рэдактар урокаў',
          socNet: {
            twitter: '#',
            telegram: '#'
          }
        },
        {
          name: 'DzedBaradzed84',
          position: 'Распрацоўшчык (React)',
          socNet: {
            twitter: '#',
            telegram: '#',
            instagram: '#',
            twitch: '#',
            github: '#',
            linkedin: '#'
          }
        },
        {
          name: 'Ян Яновіч',
          position: 'Тэсціроўшчык'
        }
      ]
    }
  },
  mutations: {
    SET_FUNCTION_CARDS(state, newFunctionCards) {
      state.functionCards = newFunctionCards
    }
  },
  actions: {
    setFunctionCards({ commit }, newFunctionCards) {
      commit('SET_FUNCTION_CARDS', newFunctionCards)
    }
  }
})

export default store
