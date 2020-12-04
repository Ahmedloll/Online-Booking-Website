<template>
  <main>
    <SearchBar></SearchBar>
    <PromotionsList></PromotionsList>
    <DestinationsList></DestinationsList>
  </main>
</template>

<script>
import SearchBar from "./SearchBar";
import PromotionsList from "./PromotionsList";
import DestinationsList from "./DestinationsList";

export default {
  name: "Main",
  components: {
    SearchBar,
    PromotionsList,
    DestinationsList,
  },
};
</script>

<style scoped>
main {
  background-color: #2d2d2d;
}
</style>