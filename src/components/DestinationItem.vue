<template>
  <div class="DestinationItem">
    <div class="color">{{ destinaion.cityName }}</div>
    <img :src="destinaion.image" />
  </div>
</template>
<script>
export default {
  name: "DestinationItem",
  props: ["destinaion"],
};
</script>
<style scoped>
@media only screen and (max-width: 1280px) {
  .DestinationItem {
    width: 45%;
  }
}
@media only screen and (min-width: 1280px) {
  .DestinationItem {
      width: 18%;

  }
}
@media only screen and (max-width: 580px) {
  .DestinationItem {
    width: 100%;
  }
}
.DestinationItem {
  position: relative;
}
img {
  width: 100%;
  height: 314px;
  border-radius: 3px 3px 0 0;
}
.color {
  font-family: playfair-display;
  width: 100%;
  height: 41px;
  position: absolute;
  right: 0;
  top: 273px;
  z-index: 1;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  line-height: 41px;
}
</style>