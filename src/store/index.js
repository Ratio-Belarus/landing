import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      something: 'gghgh'
    }
  },
  mutations: {
    SET_SOMETHING(state, newSomething) {
      state.something = newSomething
    }
  },
  actions: {
    setSomething({ commit }, something) {
      commit('SET_SOMETHING', something)
    }
  }
})

export default store
