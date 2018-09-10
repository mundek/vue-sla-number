<template>
  <div class="start start-container">
      <h3>Choose your range of numbers to practice:</h3>
      <div class="ui input">
        <p/>
        <h4>from&nbsp;&nbsp;</h4>
        <input type="number" size=4 maxlength="3" placeholder="###" class="ui input"/>
        <h4>&nbsp;to&nbsp;</h4>
        <input type="number" size=4 maxlength="3" placeholder="###">
      </div>
      <h3>Choose how many questions you want to answer:</h3>
      <div class="ui input">
        <input type="number" size=4 maxlength="3" placeholder="###" class="focus" style="width:20px;">
        <button class="ui right floated button">Begin</button>
      </div>
      <div>&nbsp;</div>
      <div>

      </div>
    
  </div>
</template>

<script>
export default {
    name: 'Start'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .start-container {
    display: inline-grid;

    grid-template-rows: repeat(3, minmax(auto, 80%));
  }
</style>
