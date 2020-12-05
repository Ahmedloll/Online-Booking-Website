<template>
  <section class="bgwhite layout ">
    <div class="container flex-s-between padd-bottom">
      <h2>RECOMENDS FOR YOU</h2>
      <div class="container">
        <a class="active" href="#">Hotels/Resorts</a>
        <a href="#">Combo</a>
        <a href="#">Voucher</a>
      </div>
      <a class="view-all-link" href="#">View All</a>
    </div>
    <div class="container flex-s-between">
      <RecomindationItem
        v-for="hotel in hotels"
        :hotel="hotel"
        :key="hotel.tag"
      ></RecomindationItem>
    </div>
  </section>
</template>

<script>
import RecomindationItem from "./RecomindationItem";

export default {
  name: "RecomindationsList",
  data() {
    return {
      hotels: [
        {
          image:
            "https://images.pexels.com/photos/205342/pexels-photo-205342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          tag: "Family Safari Vacation To The paradise of the travelers",
        },
        {
          image:
            "https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          tag: "Cde Issues Health Alert Notice For Travelers To Usa From Hon",
        },
        {
          image:
            "https://images.pexels.com/photos/756083/pexels-photo-756083.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          tag: "Airport Hotels The Right Way To Start A Short Break Holiday",
        },
        {
          image:
            "https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          tag: "Airport Hotels The Right Way To Start A Short great Break Holiday",
        },
      ],
    };
  },
  components: {
    RecomindationItem,
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