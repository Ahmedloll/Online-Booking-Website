<template>
  <section class="bgwhite layout">
    <div class="container flex-s-between">
      <h2>TRAVEL BLOG</h2>
      <div>
        <a href="#">Reviews</a>
        <a href="#">Destination</a>
        <a href="#">Handook</a>
      </div>
      <a href="#">View All</a>
    </div>
    <div class="container flex-s-between">
      <TravelBlogItem></TravelBlogItem>
      <TravelBlogItem></TravelBlogItem>
      <TravelBlogItem></TravelBlogItem>
      <TravelBlogItem></TravelBlogItem>
    </div>
  </section>
</template>

<script>
import TravelBlogItem from "./TravelBlogItem";
export default {
  name: "TravelBlogList",
  components: {
    TravelBlogItem,
  },
};
</script>

<style scoped>
</style>