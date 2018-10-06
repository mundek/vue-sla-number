import Vue from 'vue'
import Vuex from 'vuex'

import router from './router'

const RANGE_MIN = 0;
const RANGE_MAX = 999;
const QUIZ_LEN = 20;

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeMsg: 'Store: Open',
    randNumArr: [23, 55, 77, 80, 12],
    userAnswerArr: [23, 55, 67, 80, 2],
    range: {
      rangeMin: RANGE_MIN,
      rangeMax: RANGE_MAX
    },
    quizLength: QUIZ_LEN
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
    setRange: function(state, payload) {
      // console.log("setRange");
      // console.log("state: " + state.toString() + "; range: " + payload);
      // console.log("payload: " + JSON.stringify(payload));
      if(payload.rangeMin) {
//        state.range.rangeMin = payload.rangeMin;
        let newMin = parseInt(payload.rangeMin);
        let currMax = parseInt(state.range.rangeMax);

        if (newMin >= currMax) {
          // console.log("newMin: " + newMin + "; currMax: " + currMax)
          state.range.rangeMin = RANGE_MIN;
        } else if (newMin < RANGE_MIN) {
          state.range.rangeMin = currMax - 1  ;
        } else if (newMin >= RANGE_MAX) {
          state.range.rangeMin = RANGE_MAX - 1;
        } else {
          state.range.rangeMin = newMin;
        }
      } else if(payload.rangeMax) {
        // state.range.rangeMax = payload.rangeMax;
        let newMax = parseInt(payload.rangeMax);
        let currMin = parseInt(state.range.rangeMin);

        if (newMax <= currMin) {
          // console.log("newMax: " + newMax + "; currMin: " + currMin)
          state.range.rangeMax = RANGE_MAX;
        } else if (newMax > RANGE_MAX) {
          state.range.rangeMax = currMin + 1;
        } else if (newMax <= RANGE_MIN) {
          state.range.rangeMax = RANGE_MAX;
        } else {
          state.range.rangeMax = newMax;
        }
      }
    },
    setQuizLength: function(state, payload) {
      if (payload <= 0) {
        state.quizLength = QUIZ_LEN;
      } else if (payload > QUIZ_LEN) {
        state.quizLength = 1;
      } else {
        state.quizLength = payload;
      }
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
    updateRange: (context, payload) => {
      context.commit('setRange', payload);
    },
    updateQuizLength: (context, payload) => {
      context.commit('setQuizLength', payload);
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
    },
    theQuizLength: (state) => {
      return state.quizLength;
    },
    theRangeMinConst: (state) => {
      return RANGE_MIN;
    },
    theRangeMaxConst: (state) => {
      return RANGE_MAX;
    },
    theQuizLenConst: (state) => {
      return QUIZ_LEN;
    }
  }
})
