<template>
  <div @click="onDetailSelect" class="promotionitem">
    <img :src="image.src" />
    <h3>{{ image.caption }}</h3>
    <div class="container">
      <i class="fas fa-hotel"></i>
      <span>JW Mariot</span>
      <div>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PromotionItem",
  props: ["image"],
  methods: {
    onDetailSelect() {
      this.$emit("detailSelect");
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 1280px) {
  .promotionitem {
    width: 45%;
  }
}
@media only screen and (min-width: 1280px) {
  .promotionitem {
    width: 30%;
  }
}
@media only screen and (max-width: 580px) {
  .promotionitem {
    width: 100%;
  }
}
.container {
  flex-wrap: wrap;
}
.promotionitem {
  cursor: pointer;
}
img {
  width: 100%;
  height: 208px;
  border-radius: 3px 3px 0 0;
}

span {
  padding: 0px 10px;
  color: #4c4c4c;
}
</style>