import Vue from 'vue'
import Vuex from 'vuex'

import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeMsg: 'Hello from your Vuex store.'
  },
  mutations: {
    setStartState: () => {
      router.push('/');
    },
    setQuizState: () => {
      router.push('quiz');
    },
    setResultsState: () => {
      router.push('results')
    }
  },
  actions: {
    restartQuiz: ({commit}) => {
      commit('setStartState');
    },
    beginQuiz: ({commit}) => {
      commit('setQuizState');
    },
    displayResults: ({commit})  => {
      commit('setResultsState');
    }
  },
  getters: {
    theStoreMsg: (state) => {
      return state.storeMsg;
    }
  }
})
