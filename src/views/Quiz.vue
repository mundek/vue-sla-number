<template>
  <div class="quiz">
    <div class="quiz-container">
      <div class="ui left icon input">
        <input type="number" style="min-width:25%;max-width:50%" placeholder="#?">
        <i class="circular volume up icon"></i>
      </div>
      <div>
        <p>75% correct</p>
        <p>9 out of 12 questions</p>
        <p>20 questions total</p>
      </div>
      <div>&nbsp;</div>
      <div style="justify-self:end">
        <button class="ui right floated button">Finish</button>
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
    grid-template-columns: 50% auto;
    grid-template-rows: auto auto;
    justify-items: left;
    grid-gap: 10px;
    align-items: center;
    justify-content:space-around;
  }
</style>
