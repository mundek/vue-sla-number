<template>
    <div class="the-app-container">
        <div><app-header /></div>
        <div>
            <router-view />
        </div>
        <div><app-footer /></div>
    </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter'

export default {
    name: 'App',
    components: {
        AppHeader,
        AppFooter
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .the-app-container {
    display: inline-grid;
    grid-template-rows: auto auto auto;
  }
</style>
