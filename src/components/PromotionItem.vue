<template>
  <div class="promotionitem">
    <img src="../assets/pexels-photo-3155666.jpeg" />
    <h3>Family Safari Vacation To The Home Of The Gods</h3>
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
};
</script>
<style scoped>
.promotionitem {
  width: 30%;
}
img {
  width: 100%;
}
i.fa-hotel{
  color: #4C4C4C;
}
i.fa-star{
  color: #E0AD1E;
}
span{
  padding: 0px 10px;
  color: #4C4C4C;
}
</style>