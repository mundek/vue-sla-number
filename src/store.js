import Vue from 'vue'
import Vuex from 'vuex'

import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeMsg: 'Store: Open',
    randNumArr: [23, 55, 77, 80, 12],
    userAnswerArr: [23, 55, 67, 80, 2],
    range: {
      rangeMin: 0,
      rangeMax: 21
    }
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
    },
    updateRange: function (state, range) {
      Object.assign(state.range, range);
      console.log("updateRange");
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
    },
    updateRangeMin: ({commit}) => {
      commit('setMinRange', commit.message);
    },
    updateRangeMax: ({commit}) => {
      commit('setMaxRange', commit.message);
    }
  },
  getters: {
    theStoreMsg: (state) => {
      return state.storeMsg;
    },
    quizResults: (state) => {
      return [state.randNumArr, state.userAnswerArr];
    },
    theRangeMin: (state) => {
      return state.range.rangeMin;
    },
    theRangeMax: (state) => {
      return state.range.rangeMax;
    }
  }
})
