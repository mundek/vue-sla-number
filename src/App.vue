<template>
    <div class="the-app-container">
        <div><app-header /></div>
        <div>
            <router-view />
        </div>
<!--        <div><app-debug-footer /></div> -->
    </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
// import AppDebugFooter from "./components/AppDebugFooter";

export default {
  name: "App",
  components: {
    AppHeader,
//    AppDebugFooter
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.the-app-container {
  display: inline-grid;
  grid-template-rows: auto auto auto;
}
</style>
