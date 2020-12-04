<template>
  <section class="s-padding-tob-bottom">
    <div class="search-div">
      <form class="bgwhite">
        <input />
        <input />
        <input />
        <input type="submit" class="bgdark" />
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<style scoped>

div.search-div {
  background-image: url('../assets/hotel-background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  height: 100px;
  padding-top: 400px;
  text-align: -webkit-center;
}
form {
  width: fit-content;
  padding: 12px 10px;
  border-radius: 3px;
}
input ,input[type="submit" ] {
  padding: 0;
  height: 34px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  margin: 0px 5px;
}
input[type="submit" ]{
  width:173px;
  color: #E0AD1E;
}

</style>