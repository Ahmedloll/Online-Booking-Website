<template>
  <main>
    <SearchBar></SearchBar>
    <PromotionsList></PromotionsList>
    <DestinationsList></DestinationsList>
    <RecomindationsList></RecomindationsList>
    <partners></partners>
  </main>
</template>

<script>
import SearchBar from "./SearchBar";
import PromotionsList from "./PromotionsList";
import DestinationsList from "./DestinationsList";
import RecomindationsList from './RecomindationsList';
import partners from './partners';

export default {
  name: "Main",
  components: {
    SearchBar,
    PromotionsList,
    DestinationsList,
    RecomindationsList,
    partners,
  },
};
</script>

<style scoped>
main {
  background-color: #2d2d2d;
}
</style>