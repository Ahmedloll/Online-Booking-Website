<template>
  <section class="bgwhite layout">
    <div class="container flex-s-between">
      <h2>BEST PROMOTIONS</h2>
      <div class="container">
        <a class="active" href="/">Combo</a>
        <a href="/">Hotels</a>
      </div>
      <a class="view-all-link" href="">View All</a>
    </div>
    <div class="container flex-s-between">
      <PromotionItem
        v-for="image in images"
        :image="image"
        :key="image.caption"
      ></PromotionItem>
    </div>
  </section>
</template>

<script>
import PromotionItem from "./PromotionItem";

export default {
  name: "PromotionsList",
  data() {
    return {
      images: [
        {
          src:
            "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
          caption: "Family Safari Vacation To The paradise of the travelers",
        },
        {
          src:
            "https://images.pexels.com/photos/4112236/pexels-photo-4112236.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          caption:
            "Cde Issues Health Alert Notice For Travelers To Usa From Hon",
        },
        {
          src:
            "https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          caption:
            "Airport Hotels The Right Way To Start A Short Break Holiday",
        },
      ],
    };
  },
  components: {
    PromotionItem,
  },
};
</script>

<style scoped>
a {
  font-family: playfair-display;

  line-height: 21px;
  color: #4c4c4c;
  margin: auto 10px;
}
a.active {
  color: black;
  border-bottom: 2px solid #e0ad1e;
  font-weight: bold;
}
</style>



