<template>
  <div class="AppHeader">
    <h3>store message: {{ theStoreMsg }}</h3>
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
