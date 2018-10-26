<template>
  <div class="start start-container">
    <div class="theRangeHeader"><h3>Choose your range of numbers to practice:</h3></div>
    <div class="theRange" style="margin:1em 0em;">
      <h4 style="display:inline-block;margin:0;">from&nbsp;&nbsp;</h4>
      <input type="number" style="width:4em" size=4 
        :value="theRangeMin" 
        v-on:change="updateRange('rangeMin', $event.target.value)"
        @keyup.enter="beginQuiz"
      />
      <h4 style="display:inline-block;margin:0;">&nbsp;to&nbsp;</h4>
      <input type="number" style="width:4em" size=4
        :value="theRangeMax" 
        v-on:change="updateRange('rangeMax', $event.target.value)" 
        @keyup.enter="beginQuiz"
      />&nbsp;(max: {{theRangeMaxConst}})
    </div>
    <div class="theNumbersHeader">
      <h3>Choose how many randomly chosen numbers you want to try:</h3>
    </div>
    <div class="theNumbers">
      <div style="margin:1em 0;">
        <input type="number" style="width:3em;" size=4 maxlength=3 
        :value="theQuizLength" 
        v-on:change="updateLength($event.target.value)"
        @keyup.enter="beginQuiz"
      />&nbsp;(max: {{theQuizLenConst}})
      </div>
    </div>
    <div class="theButton" style="text-align:right;">
      <button class="ui button big" @click="beginQuiz">Begin</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Start",
  computed: {
    ...mapGetters([
      "theRangeMin", "theRangeMax", "theQuizLength",
      "theRangeMinConst", "theRangeMaxConst", "theQuizLenConst"
    ])
  },
  methods: {
    updateRange(field, value) {
      this.$store.dispatch("updateRange", {
        [field]: value
      });
    },
    updateLength(value) {
      this.$store.dispatch("updateQuizLength", value);
    },
    ...mapActions(["beginQuiz", "displayResults"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.start-container {
  display: grid;
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
  align-self: flex-end;
}
</style>

<!--
-->