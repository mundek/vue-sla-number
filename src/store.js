import Vue from 'vue'
import Vuex from 'vuex'

import router from './router'

const RANGE_MIN = 0;
const RANGE_MAX = 999;
const QUIZ_LEN = 20;

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    range: {
      rangeMin: RANGE_MIN,
      rangeMax: RANGE_MAX
    },
    quizLength: QUIZ_LEN,
    storeMsg: 'Store: Open',
    randNumArr: [],
    userAnswerArr: []
  },
  mutations: {
    setStartState: () => {
      router.push('/');
    },
    setNumberList: (state) => {
      state.randNumArr = [];
      let theRange = (state.range.rangeMax - state.range.rangeMin) + 1;
      const duplicatesAllowed = (theRange < state.quizLength);
      console.log("need to allow duplicates? " + duplicatesAllowed);
      console.log("state.randNumArr.length: " + state.randNumArr.length + "; state.quizLength: " + state.quizLength);
      console.log((state.randNumArr.length < Number(state.quizLength)));
      while(state.randNumArr.length < Number(state.quizLength)){
        let aRandNum = Math.floor(
          (Math.random() * (theRange)) +
          state.range.rangeMin
        );
        if((state.randNumArr.indexOf(aRandNum) !== -1) && !duplicatesAllowed) {
          console.log("duplicatesAllowed: " + duplicatesAllowed);
          continue;
        }
        state.randNumArr[state.randNumArr.length] = aRandNum;
        console.log('aRandNum, #' + state.randNumArr.length + ': ' + aRandNum);
      }
    },
    setQuizState: () => {
      router.push('quiz');
    },
    setResultsState: () => {
      router.push('results')
    },
    setRange: function(state, payload) {
      let newMin = parseInt(payload.rangeMin);
      let newMax = parseInt(payload.rangeMax);
      let currMin = parseInt(state.range.rangeMin);
      let currMax = parseInt(state.range.rangeMax); 

      if(newMin) {
        if (newMin >= currMax) {
          state.range.rangeMin = RANGE_MIN;
        } else if (newMin < RANGE_MIN) {
          state.range.rangeMin = currMax - 1  ;
        } else if (newMin >= RANGE_MAX) {
          state.range.rangeMin = RANGE_MAX - 1;
        } else {
          state.range.rangeMin = newMin;
        }
      } else if(newMax) {
        if (newMax <= currMin) {
          state.range.rangeMax = RANGE_MAX;
        } else if (newMax > RANGE_MAX) {
          state.range.rangeMax = currMin + 1;
        } else if (newMax <= RANGE_MIN) {
          state.range.rangeMax = RANGE_MAX;
        } else {
          state.range.rangeMax = newMax;
        }
      }
      // let currRange =  (parseInt(state.range.rangeMax) - parseInt(state.range.rangeMin));
      // console.log("currRange: " + currRange + "; state.quizLength:" + state.quizLength);
      // if(currRange < parseInt(state.quizLength)){
      //   console.log("currRange < state.quizLength; (state.range.rangeMin + state.quizLength)=" + (parseInt(state.range.rangeMin) + parseInt(state.quizLength)));
      //   state.range.RangeMax = (parseInt(state.range.rangeMin) + currRange);
      //   console.log("state.range.RangeMax = " + state.range.RangeMax);
      // }
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
      commit('setNumberList');
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
    theRangeMinConst: () => {
      return RANGE_MIN;
    },
    theRangeMaxConst: () => {
      return RANGE_MAX;
    },
    theQuizLenConst: () => {
      return QUIZ_LEN;
    }
  }
})
