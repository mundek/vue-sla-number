<template>
  <div class="results results-container">
    <div class="theResults">
      <h3>
        {{ quizResults[0] }}
      </h3>
      <h3>
        {{ quizResults[1] }}
      </h3>
    </div>
    <div class="theStats">
      <h3>75% correct</h3>
      <p>9 out of 12 questions</p>
      <em>20 questions total</em>
    </div>
    <div class="restartBt" style="text-align:right;">
      <button class="ui button">New Quiz</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Results',
    computed: {
      ...mapGetters(['quizResults'])
    }
};
</script>

<style scoped>
  .results-container {
    display:grid;
    grid-gap: 10px;
    grid-template-areas: 
      "theResults theStats"
      "theResults theButton";
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
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
</style>

<!-- 

-->