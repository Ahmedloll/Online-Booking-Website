<template>
  <main>
    <SearchBar></SearchBar>
    <PromotionsList></PromotionsList>
    <DestinationsList></DestinationsList>
    <RecomindationsList></RecomindationsList>
    <Partners></Partners>
    <TravelBlogList></TravelBlogList>
  </main>
</template>

<script>
import SearchBar from "./SearchBar";
import PromotionsList from "./PromotionsList";
import DestinationsList from "./DestinationsList";
import RecomindationsList from "./RecomindationsList";
import Partners from "./partners";
import TravelBlogList from "./TravelBlogList";

export default {
  name: "Main",
  components: {
    SearchBar,
    PromotionsList,
    DestinationsList,
    RecomindationsList,
    Partners,
    TravelBlogList,
  },
};
</script>

<style scoped>
main {
  background-color: #2d2d2d;
}
</style>