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
    <div class="stats">
      <p>75% correct</p>
      <p>9 out of 12 questions</p>
      <p>20 questions total</p>
    </div>
    <div class="restartBt" style="">
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
      "dispRes dispStats"
      "dispRes dispRestart";
    grid-template-columns: auto 35%;
    grid-template-rows: auto auto;
  }
  .theResults {
    grid-area: dispRes;
  }
  .stats {
    grid-area: dispStats;
  }
  .restartBt {
    grid-area: dispRestart;
  }
</style>
