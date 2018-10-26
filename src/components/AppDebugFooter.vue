<template>
  <div class="AppDebugFooter">
    <hr/>
    <button class="ui basic button" @click="restartQuiz">(Re)start Quiz</button>
    <button class="ui basic button" @click="beginQuiz">Begin Quiz</button>
    <button class="ui basic button" @click="displayResults">Show Results</button>
    <h3>store message: {{ theStoreMsg }} | {{ theRangeMin }} | {{ theRangeMax }} </h3>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppDebugFooter',
  computed: {
    ...mapGetters(['theStoreMsg', 'theRangeMin', 'theRangeMax'])
  },
  methods: {  
    ...mapActions(['restartQuiz', 'beginQuiz', 'displayResults'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>