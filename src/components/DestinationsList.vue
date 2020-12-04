<template>
  <section class="bgwhite layout">
    <div class="container flex-s-between">
      <h2>DESTINAYIONS</h2>
      <div>
        <a href="#">Vietnam</a>
        <a href="#">Myanmar</a>
        <a href="#">Thailand</a>
        <a href="#">Philippines</a>
      </div>
      <a href="#">View All</a>
    </div>
    <div class="container flex-s-between">
      <DestinationItem></DestinationItem>
      <DestinationItem></DestinationItem>
      <DestinationItem></DestinationItem>
      <DestinationItem></DestinationItem>
      <DestinationItem></DestinationItem>
    </div>
  </section>
</template>

<script>
import DestinationItem from "./DestinationItem";

export default {
  name: "DestinationsList",
  components: {
    DestinationItem,
  },
};
</script>

<style scoped>
</style>