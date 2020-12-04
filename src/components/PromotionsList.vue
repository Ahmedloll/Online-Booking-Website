<template>
  <section class="bgwhite layout">
    <div class="container flex-s-between">
      <h2>BEST PROMOTIONS</h2>
      <div>
        <a href="#">Combo</a>
        <a href="#">Hotels</a>
      </div>
      <a href="#">View All</a>
    </div>
    <div class="container flex-s-between">
      <PromotionItem></PromotionItem>
      <PromotionItem></PromotionItem>
      <PromotionItem></PromotionItem>
    </div>
  </section>
</template>

<script>
import PromotionItem from "./PromotionItem";

export default {
  name: "PromotionsList",
  components: {
    PromotionItem,
  },
};
</script>

<style scoped>
</style>