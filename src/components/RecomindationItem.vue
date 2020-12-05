<template>
  <div class="RecomindationItem container">
    <img class="RecomindationItem" :src="hotel.image" />
    <div class="RecomindationItem">
      <h3>{{hotel.tag}}</h3>
      <div class="margin">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <div class="margin">
        <span>Hotel Service</span>
      </div>
      <div>
        <span><i class="far fa-hotel"></i></span>
        <span><i class="far fa-hotel"></i></span>
        <span><i class="far fa-hotel"></i></span>
        <span><i class="far fa-hotel"></i></span>
        <span><i class="far fa-hotel"></i></span>
      </div>
      <div class="details-button">Details</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecomindationItem",
  props: ["hotel"],
};
</script>
<style scoped>
.RecomindationItem {
  width: 48%;
  padding: 0 2% 10px 0;
}
h3 {
  margin: 0 0 10px 0;
}
.margin {
  margin: 0 0 10px 0;
}
img {
  width: 48%;
  height: 217px;
  border-radius: 3px 3px 0 0;
}
span {
  color: #4c4c4c;
}
.details-button {
  margin-top: 10px;
  box-sizing: border-box;
  height: 36px;
  width: 136px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  background-color: #ffffff;
  text-align: center;
  line-height: 36px;
  color: #2d2d2d;
  cursor: pointer;
}
</style>
