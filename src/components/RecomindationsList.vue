<template>
  <section class="bgwhite layout">
    <div class="container flex-s-between">
      <h2>RECOMENDS FOR YOU</h2>
      <div>
        <a href="#">Hotels/Resorts</a>
        <a href="#">Combo</a>
        <a href="#">Voucher</a>
      </div>
      <a href="#">View All</a>
    </div>
    <div class="container flex-s-between">
      <RecomindationItem></RecomindationItem>
      <RecomindationItem></RecomindationItem>
      <RecomindationItem></RecomindationItem>
      <RecomindationItem></RecomindationItem>
    </div>
  </section>
</template>

<script>
import RecomindationItem from "./RecomindationItem";

export default {
  name: "RecomindationsList",
  components: {
    RecomindationItem,
  },
};
</script>

<style scoped>
</style>