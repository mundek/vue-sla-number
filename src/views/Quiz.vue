<template>
    <div class="quiz quiz-container">
      <div class="theInput">
        <div class="ui left icon input">
          <input type="number" placeholder="#?">
          <i class="circular volume up link icon" @click="playNumber"></i>
        </div>
      </div>
      <div class="theScore">
        <h3>{{ currentPercentage }}% correct</h3>
        <p>{{ correctCounter }} correct out of {{ questionCounter }} questions</p>
        <em>{{ theQuizLength }} questions total</em>
      </div>
      <div class="theButton" style="text-align:right;">
        <button class="ui button">Finish</button>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Quiz',
    data: function() {
      return {
        questionCounter: 0,
        correctCounter: 0
      };
    },
    computed: {
      currentPercentage: function() {
        if (this.questionCounter == 0) {
          return 0;
        } else {
          return this.correctCounter / this.questionCounter;
        }
      },
      ...mapGetters([
        'theQuizLength', 'theNumberList'
      ])
    },

    methods: {
      playNumber() {
        let aNumber = this.$store.state.randNumArr[this.questionCounter];
        window.responsiveVoice.speak(String(aNumber), 'Spanish Latin American Female');
      },
      ...mapActions(['restartQuiz', 'displayResults'])
    },
    created: function() {
      console.log('Quiz.vue created');
    }
};
</script>

<style scoped>
  .quiz-container {
    display:grid;
    grid-template-areas:
      "theInput theScore" 
      "theInput theButton";
    grid-template-columns: 40% 60%;
    grid-template-rows: auto auto;
  }
  .theInput {
    grid-area: theInput;
  }
  .theScore {
    grid-area: theScore;
  }
  .theButton {
    grid-area: theButton;
    align-self: flex-end;
  }
</style>

<!-- 

-->