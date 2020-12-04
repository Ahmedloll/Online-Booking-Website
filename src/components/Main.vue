<template>
  <main>
    <SearchBar></SearchBar>
    <PromotionsList></PromotionsList>
  </main>
</template>

<script>
import SearchBar from "./SearchBar";
import PromotionsList from './PromotionsList'

export default {
  name: "Main",
  components: {
    SearchBar,
    PromotionsList,
  },
};
</script>

<style scoped>
main {
  background-color: #2d2d2d;
}
</style>