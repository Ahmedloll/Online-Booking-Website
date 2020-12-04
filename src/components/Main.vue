<template>
  <main>
    <SearchBar></SearchBar>
  </main>
</template>

<script>
import SearchBar from "./SearchBar";
export default {
  name: "Main",
  components: {
    SearchBar,
  },
};
</script>

<style scoped>
main {
  background-color: #2d2d2d;
}
</style>