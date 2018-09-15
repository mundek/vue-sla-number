<template>
  <div class="start start-container">
    <div class="theRangeHeader"><h3>Choose your range of numbers to practice:</h3></div>
    <div class="theRange" style="margin:1em 0em;">
      <h4 style="display:inline-block;margin:0;">from&nbsp;&nbsp;</h4>
      <input type="number" style="width:4em" size=4 placeholder="###"/>
      <h4 style="display:inline-block;margin:0;">&nbsp;to&nbsp;</h4>
      <input type="number" style="width:4em" size=4 placeholder="###">
    </div>
    <div class="theNumbersHeader"><h3>Choose how many questions you want to answer:</h3></div>
    <div class="theNumbers">
      <div style="margin:1em 0;"><input type="number" size=4 maxlength="3" placeholder="20" style="width:3em;"></div>
    </div>
    <div class="theButton" style="text-align:right;">
      <button class="ui button">Begin</button>
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
    display:grid;
    grid-template-areas:
      "theRangeHeader" 
      "theRange"
      "theNumbersHeader"
      "theNumbers"
      "theButton";
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
  }
  .theRange {
    grid-area: theRange;
    grid-template-rows: 1fr 1fr;
  }
  .theNumbers {
    grid-area: theNumbers;
    grid-template-rows: 1fr 1fr;

  }
  .theButton {
    grid-area: theButton;
    align-self:flex-end;
  }

</style>

<!--
-->