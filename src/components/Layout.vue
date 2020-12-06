<template>
  <div class="bgdark outer-layout">
    <AppHeader></AppHeader>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import AppHeader from "./AppHeader";
import Footer from "./Footer";

export default {
  name: "Layout",
  components: {
    AppHeader,
    Footer,
  },
};
</script>
