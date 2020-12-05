<template>
  <div class="travel-blog-item flex-s-between">
    <img :src="blog.image" />
    <h3>{{ blog.tag }}</h3>
    <p>{{ blog.description }}</p>
  </div>
</template>

<script>
export default {
  name: "TravelBlogItem",
  props: ["blog"],
};
</script>

<style scoped>
.travel-blog-item {
  width: 23%;
}
img {
  width: 100%;
  height: 195px;
  border-radius: 3px 3px 0px 0px;
}
P {
  font-family: noto-sans-display;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: #4c4c4c;
}
</style>