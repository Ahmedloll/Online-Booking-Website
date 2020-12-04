<template>
  <div class="promotionitem">
    <div class="color">
      Hoi An
    </div>
    <img src="../assets/pexels-ricardo-esquivel-1802255.jpg" />
  </div>
</template>
<script>
export default {
  name: "PromotionItem",
};
</script>
<style scoped>
.promotionitem {
  width: 18%;
  position: relative;
}
img {
  width: 100%;
  height: 314px;
  border-radius: 3px 3px 0 0;
}
.color {
  width: 100%;
  height: 41px;
  position: absolute;
  right: 0;
  top: 273px;
  z-index: 1;
  background: rgba(255,255,255,0.8);
  text-align: center;
  line-height: 41px;
}
</style>