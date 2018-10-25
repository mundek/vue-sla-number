<template>
  <div class="results results-container">
    <div class="resultsHead">
      <h3>RESULTS</h3>
    </div>
    <div class="theResults" :class="{ 'results-list-one-col': numbCols(), 'results-list-two-col': !numbCols()}">
      <div
        v-for="(aNumber, index) in theRandNumbers" 
        :key="index"
      >
        <div class="ui label" style="width:6em;display:inline-block;margin:0;">
          <i class="playButton play circle icon" @click="playANumber(aNumber)"></i>
          {{ aNumber }}
        </div>
        <div v-if="isIncorrect(index)" class="ui basic label" style="width:6em;display:inline-block;margin:0;">
          <i class="playButton play circle icon" @click="playANumber(theUserResponses[index])"></i>
          <div
            style="display:inline-block;color:red;font-weight:900">
            {{ theUserResponses[index] }}
          </div>
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
      <em>{{ theQuizLength }} questions total</em>
    </div>
    <div class="restartBt" style="text-align:right;">
      <button class="ui button">New Quiz</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

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
      if(this.$store.state.quizLength < 11) {
        return true;
      } else {
        return false;
      }
    },
    playANumber(aNumber) {
      if (aNumber) {
        window.responsiveVoice.speak(
          String(aNumber),
          "Spanish Latin American Female"
        );
      }
    }
  }
};
</script>

<style scoped>
.results-container {
  display: grid;
  grid-gap: 10px;
  grid-template-areas:
    "resultsHead resultsHead"
    "theResults theStats"
    "theResults theButton";
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
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
}
.playButton {
  cursor: pointer;
}
.incorrect {
  color: red;
}
</style>