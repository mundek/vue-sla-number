<template>
  <div class="results results-container">
    <div class="resultsHead">
      <h2>Results</h2>
    </div>
    <div class="theResults" :class="{ 'results-list-one-col': numbCols(), 'results-list-two-col': !numbCols()}">
      <div
        v-for="(aNumber, index) in theRandNumbers" 
        :key="index"
      >
        <div @click="playANumber(aNumber)"
          class="ui label"
          style="width:8em;display:inline-block;margin:0;"
        >
          <i class="playButton play circle icon large"> {{ aNumber }}</i>
        </div>
        <div v-if="isIncorrect(index)"
          @click="playANumber(theUserResponses[index])"
          class="ui label" 
          style="width:8em;display:inline-block;margin:0;color:red;font-weight:900"
        >
          <i class="playButton play circle icon large"> {{ theUserResponses[index] }}</i>
        </div>
      </div>
      <!---
        https://medium.com/@patrickbrosset/css-grid-css-multi-columns-7664f59bb60c
        https://css-tricks.com/guide-responsive-friendly-css-columns/
      -->
    </div>
    <div class="theStats">
      <h3>{{ theCurrentPercentage }}% correct</h3>
      <p>{{ theCorrectCount }} correct out of {{ theQuestionIndex }} questions answered</p>
    </div>
    <div class="restartBt" style="text-align:right;">
      <button class="ui button big" @click="restartQuiz">New Quiz</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Results",
  computed: {
    ...mapGetters([
      "theQuizLength", "theQuestionIndex", "theCurrentPercentage",
      "theCorrectCount", "theRandNumbers", "theUserResponses"
    ])
  },
  methods: {
    isIncorrect: function(aNumber) {
      if(this.$store.state.randNumArr[aNumber] != this.$store.state.userAnswerArr[aNumber]) {
        return true;
      }
    },
    numbCols: function() {
      if(this.$store.state.quizQuestionIndex < 11) {
        return true;
      } else {
        return false;
      }
    },
    playANumber: function(aNumber) {
      if (aNumber) {
        window.responsiveVoice.speak(
          String(aNumber),
          "Spanish Latin American Female"
        );
      }
    },
    ...mapActions(["restartQuiz"])
  }
};
</script>

<style scoped>
.results-container {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto;
  grid-template-areas:
    "resultsHead resultsHead"
    "theResults theStats"
    "theResults theStats"
    "theResults theButton";
}
.resultsHead {
  grid-area: resultsHead;
}
.theResults {
  grid-area: theResults;
}
.theStats {
  grid-area: theStats;
}
.theButton {
  grid-area: theButton;
}
.results-list-one-col {
  column-count: 1;
}
.results-list-two-col {
  column-count: 2;
  column-rule: 2px solid lightslategray;
}
.playButton {
  cursor: pointer;
}
.incorrect {
  color: red;
}
</style>
