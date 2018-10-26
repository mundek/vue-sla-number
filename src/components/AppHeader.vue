<template>
  <div class="AppHeader ui container">
    <h1>Spanish Number Practice</h1>
    <hr/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters(['theStoreMsg'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
