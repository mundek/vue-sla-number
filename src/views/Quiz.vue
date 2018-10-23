<template>
    <div class="quiz quiz-container">
      <div class="theInput">
        <div class="ui left icon input">
          <input id="userNumber" type="number" 
            style="width:8em" size=4 autofocus 
            placeholder="#?"
            :value="theCurrentAnswer" 
            @change="updateUserResponse($event.target.value)"
            @keyup.enter="checkResponse"
          >
          <i class="circular volume up link icon" @click="playNumber"></i>
        </div>
        <button class="ui button" @click="checkResponse">Check</button>
      </div>
      <div class="theScore">
        <h3>{{ theCurrentPercentage }}% correct</h3>
        <p>{{ theCorrectCount }} correct out of {{ theQuestionIndex }} questions answered</p>
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
    created: function() {
      // console.log('Quiz.vue created');
      // play the first number in randNumArr as soon as quiz begins
      this.playNumber();
    },
    computed: {
      ...mapGetters([
        'theQuizLength', 'theQuestionIndex', 'theCurrentAnswer', 'theCurrentPercentage', 'theCorrectCount'
      ])
    },
    methods: {
      playNumber() {
        let aNumber = this.$store.state.randNumArr[this.$store.state.quizQuestionIndex];
        if (aNumber) {
          window.responsiveVoice.speak(String(aNumber), 'Spanish Latin American Female');
        }
      },
      updateUserResponse(value) {
        this.$store.dispatch('updateCurrResponse', value);
      },
      checkResponse(value) {
        var str = document.getElementById("userNumber").value;
        // console.log("str: " + str + " | !str: " + (!str) + " | str.length: " + str.length);
        if(str.length) {
          this.$store.dispatch('updateUserAnswerArr', value);
          if(this.$store.state.quizQuestionIndex < this.$store.state.randNumArr.length) {
            this.playNumber();
          }
        } else {
          this.playNumber();
        }
      },
      ...mapActions(['restartQuiz', 'displayResults'])
    },
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