<template>
  <div class="AppFooter">
    <hr/>
    <button @click="restartQuiz">Restart Quiz</button>
    <button @click="beginQuiz">Begin Quiz</button>
    <button @click="displayResults">Show Results</button>
    <h3>store message: {{ theStoreMsg }}</h3>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppFooter',
  computed: {
    ...mapGetters(['theStoreMsg'])
  },
  methods: {
    ...mapActions(['restartQuiz', 'beginQuiz', 'displayResults'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
