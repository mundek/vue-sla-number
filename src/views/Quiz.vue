<template>
  <div class="quiz">
    <div class="quiz-container">
      <div class="ui left icon input">
        <input type="number" style="min-width:40%;max-width:60%" placeholder="#?">
        <i class="circular volume up icon"></i>
      </div>
      <div style="justify-self:right;">
        <p>75% correct</p>
        <p>9 out of 12 questions</p>
        <p>20 questions total</p>
      </div>
      <div>&nbsp;</div>
      <div style="justify-self:end;align:left">
        <button class="ui button">Finish</button>
      </div>
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
    display:inline-grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, minmax(auto, 80%));
    grid-gap: 20px;
    align-items:center;
  }
</style>
