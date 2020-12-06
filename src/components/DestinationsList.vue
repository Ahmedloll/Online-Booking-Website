<template>
  <section class="bgwhite layout">
    <div class="container flex-s-between padd-bottom">
      <h2>DESTINAIONS</h2>
      <div class="container">
        <a class="active" href="#">Vietnam</a>
        <a href="#">Myanmar</a>
        <a href="#">Thailand</a>
        <a href="#">Philippines</a>
      </div>
      <a class="view-all-link" href="#">View All</a>
    </div>
    <div class="container flex-s-between dest">
      <DestinationItem
        v-for="destinaion in destinaions"
        :destinaion="destinaion"
        :key="destinaion.cityName"
      ></DestinationItem>
    </div>
  </section>
</template>

<script>
import DestinationItem from "./DestinationItem";

export default {
  name: "DestinationsList",
  data() {
    return {
      destinaions: [
        {
          image:
            "https://images.pexels.com/photos/3214972/pexels-photo-3214972.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
          cityName: "Egypt",
        },
        {
          image:
            "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          cityName: "Australia",
        },
        {
          image:
            "https://images.pexels.com/photos/1837591/pexels-photo-1837591.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          cityName: "England",
        },
        {
          image:
            "https://images.pexels.com/photos/2070485/pexels-photo-2070485.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          cityName: "Thailand",
        },
        {
          image:
            "https://images.pexels.com/photos/2792601/pexels-photo-2792601.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          cityName: "India",
        },
      ],
    };
  },
  components: {
    DestinationItem,
  },
};
</script>

<style scoped>
.dest{
  flex-wrap: wrap;
}
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