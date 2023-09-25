import { createStore } from 'vuex'
import axios from 'axios'
import i18n from '../locales'

const store = createStore({
  state() {
    return {
      widthClient: null,
      networks: {
        twitter: 'https://twitter.com/RatioBelarus',
        mastodon: 'https://vkl.world/@ratio',
        email: 'ratio.belarus@gmail.com'
      },
      formFields: {
        contact: null,
        message: null
      },
      errorMessage: null
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
    },
    SET_ERROR_MESSAGE(state, newErrorMessage) {
      state.errorMessage = newErrorMessage
    }
  },
  actions: {
    setWidthClient({ commit }, newWidthClient) {
      commit('SET_WIDTH_CLIENT', newWidthClient)
    },
    setFunctionCards({ commit }, newFunctionCards) {
      commit('SET_FUNCTION_CARDS', newFunctionCards)
    },
    setFormFields({ commit }, newFormFields) {
      commit('SET_FORM_FIELDS', newFormFields)
      let errorMessage
      axios
        .post(import.meta.env.VITE_APP_API_ENDPOINT_URL + '/contact_us', newFormFields)
        .then(() => {
          errorMessage = {
            type: 'success',
            text: i18n.global.t('messages.success')
          }
          commit('SET_ERROR_MESSAGE', errorMessage)
        })
        .catch((err) => {
          if (err.response.status == 422) {
            errorMessage = {
              type: 'error',
              text: i18n.global.t('messages.error')
            }
          } else {
            errorMessage = {
              type: 'warning',
              text: i18n.global.t('messages.warning')
            }
          }
          commit('SET_ERROR_MESSAGE', errorMessage)
        })
        .finally(() => setTimeout(() => commit('SET_ERROR_MESSAGE', null), 2000))
    }
  }
})

export default store
