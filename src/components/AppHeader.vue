<template>
  <div class="AppHeader ui container">
    <h3>Number Practice App | {{theStoreMsg}}</h3>
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
