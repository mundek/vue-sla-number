<template>
    <div>
        <app-header />
        <div class="ui container">
            <router-view />
        </div>
        <app-footer />
    </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

export default {
    name: 'App',
    components: {
        AppHeader,
        AppFooter
    }
};
</script>

<style>
</style>
