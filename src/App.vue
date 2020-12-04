<template>
  <div class="bgdark outer-layout">
    <AppHeader></AppHeader>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    AppHeader,
    Main,
    Footer
  },
};
</script>
<style scoped>
</style>