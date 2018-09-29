<template>
    <div class="quiz quiz-container">
      <div class="theInput">
        <div class="ui left icon input">
          <input type="number" placeholder="#?">
          <i class="circular volume up icon"></i>
        </div>
      </div>
      <div class="theScore">
        <h3>75% correct</h3>
        <p>9 out of 12 questions</p>
        <em>20 questions total</em>
      </div>
      <div class="theButton" style="text-align:right;">
        <button class="ui button">Finish</button>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Quiz'
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