import Vue from 'vue'
import Vuex from 'vuex'

import router from './router'

const RANGE_MIN = 0;
const RANGE_MAX = 999;
const QUIZ_LEN = 20;

Vue.use(Vuex)

export default new Vuex.Store({
  // ######################
  // ######################
  // STATE
  // ######################
  // ######################
  state: {
    range: {
      rangeMin: RANGE_MIN,
      rangeMax: RANGE_MAX
    },
    quizLength: QUIZ_LEN,
    storeMsg: 'Store: Open',
    randNumArr: [],
    userAnswerArr: [],
    currentUserAnswer: '',
    quizQuestionIndex: 0,
    totalCorrect: 0
  },
  // ######################
  // ######################
  // MUTATIONS
  // ######################
  // ######################
  mutations: {
    resetState: (state) => {
      state.range.rangeMin = RANGE_MIN;
      state.range.rangeMax = RANGE_MAX;
      state.quizLength = QUIZ_LEN;
      state.storeMsg = 'Store: Reset';
      state.randNumArr = [];
      state.userAnswerArr = [];
      state.currentUserAnswer = '';
      state.quizQuestionIndex = 0;
      state.totalCorrect = 0;
      console.log('State reset.');
    },
    setStartState: () => {
      router.push('/');
    },
    setQuizState: () => {
      router.push('quiz');
    },
    setResultsState: () => {
      router.push('results')
    },
    setNumberList: (state) => {
      let theRange = (state.range.rangeMax - state.range.rangeMin) + 1;
      const duplicatesAllowed = (theRange < state.quizLength);
      var listItems = 0;
      while(listItems < Number(state.quizLength)){
        let aRandNum = Math.floor(
          (Math.random() * (theRange)) +
          state.range.rangeMin
        );
        if((state.randNumArr.indexOf(aRandNum) !== -1) && !duplicatesAllowed) {
          continue;
        }
        Vue.set(state.randNumArr, listItems++, aRandNum);
      }
      console.log(state.randNumArr);
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
    },
    setQuizLength: function(state, payload) {
      if (payload <= 0) {
        state.quizLength = QUIZ_LEN;
      } else if (payload > QUIZ_LEN) {
        state.quizLength = 1;
      } else {
        state.quizLength = payload;
      }
    },
    setCurrentResponse: function(state, payload) {
      payload = Number(payload);
      if (payload <= RANGE_MIN) {
        state.currentUserAnswer = RANGE_MIN;
      } else if (payload >= RANGE_MAX) {
        state.currentUserAnswer = RANGE_MAX;
      } else {
        state.currentUserAnswer = payload;
      }
    },
    pushUserResponse: function(state, payload) {
      Vue.set(state.userAnswerArr, state.quizQuestionIndex, payload);
      if(state.userAnswerArr[state.quizQuestionIndex] == state.randNumArr[state.quizQuestionIndex]) {
        state.totalCorrect++;
        // console.log("state.totalCorrect: " + state.totalCorrect);
      }
      state.currentUserAnswer = '';

      // console.log(
      //   "userAnswerArr: " + state.userAnswerArr, state.currentUserAnswer
      // );
      if(state.randNumArr.length <= ++state.quizQuestionIndex) {
        router.push('results');
      }
    }
  },
  // ######################
  // ######################
  // ACTIONS
  // ######################
  // ######################
  actions: {
    restartQuiz: ({commit}) => {
      commit('resetState');
      commit('setStartState');
    },
    beginQuiz: ({commit}) => {
      commit('setQuizState');
      commit('setNumberList');
    },
    displayResults: (context)  => {
      // ** TEMP CODE **
      // populate
      // context.state.randNumArr = [12, 312, 541, 49, 731, 229, 617, 49, 469, 505, 40, 312, 541, 49, 731, 229, 617, 49, 469, 505];
      // context.state.userAnswerArr = [12, 212, 551, 49, 731, 229, 617, 49, 469, 515, 14, 212, 551, 49, 731, 229, 617, 49, 469, 515];
      // ** END TEMP CODE **
      context.commit('setResultsState');
    },
    updateRange: (context, payload) => {
      context.commit('setRange', payload);
    },
    updateQuizLength: (context, payload) => {
      context.commit('setQuizLength', payload);
    },
    updateCurrResponse: (context, payload) => {
      context.commit('setCurrentResponse', payload);
    },
    updateUserAnswerArr: (context) => {
      context.commit('pushUserResponse', context.state.currentUserAnswer);
    }
  },
  // ######################
  // ######################
  // GETTERS
  // ######################
  // ######################
  getters: {
    theStoreMsg: (state) => {
      return state.storeMsg;
    },
    // quizResults: (state) => {
    //   return [state.randNumArr, state.userAnswerArr];
    // },
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
    },
    theNumberList: (state) => {
      return state.randNumArr;
    },
    theQuestionIndex: (state) => {
      return state.quizQuestionIndex;
    },
    theCurrentAnswer: (state) => {
      return state.currentUserAnswer;
    },
    theCurrentPercentage: (state) => {
      if(state.quizQuestionIndex) {
        return Math.ceil((state.totalCorrect / state.quizQuestionIndex) * 100);
      } else {
        return 0;
      }
    },
    theCorrectCount: (state) => {
      return state.totalCorrect;
    },
    theRandNumbers: (state) => {
      return state.randNumArr;
    },
    theUserResponses: (state) => {
      return state.userAnswerArr;
    }
  }
})
