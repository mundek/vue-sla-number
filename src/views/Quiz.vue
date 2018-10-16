<template>
    <div class="quiz quiz-container">
      <div class="theInput">
        <div class="ui left icon input">
          <input type="number" placeholder="#?">
          <i class="circular volume up link icon" @click="playNumber"></i>
        </div>
      </div>
      <div class="theScore">
        <h3>75% correct</h3>
        <p>{{ correctCounter }} correct out of {{ quizCounter }} questions</p>
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
        quizCounter: 0,
        correctCounter: 0
      };
    },
    computed: {
      ...mapGetters([
        'theQuizLength'
      ])
    },

    methods: {
      playNumber() {
        console.log('playNumber()');
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