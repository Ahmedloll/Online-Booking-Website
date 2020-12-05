<template>
  <div class="bgdark outer-layout">
    <AppHeader></AppHeader>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import AppHeader from "./AppHeader";
import Main from "./Main";
import Footer from "./Footer";

export default {
  name: "Layout",
  components: {
    AppHeader,
    Main,
    Footer,
  },
};
</script>
