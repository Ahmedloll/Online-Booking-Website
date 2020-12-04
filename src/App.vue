<template>
  <div>
    <AppHeader></AppHeader>
    <Main></Main>
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader";
import Main from './components/Main'

export default {
  name: "App",
  components: {
    AppHeader,
    Main,
  },
};
</script>
<style scoped>
</style>