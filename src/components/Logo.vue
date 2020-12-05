<template>
  <div class="container">
    <img class="logo" src="../assets/logo.png" />
    <h3>NKN</h3>
  </div>
</template>
<script>
export default {
  name: "Logo",
};
</script>
<style scoped>
h3 {
  color: #ffffff;
  font-family: noto-sans-display;
  font-size: 20px;
  line-height: 23px;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.logo {
  width: 45px;
  height: 45px;
  margin: auto 0px;
}
</style>