<template>
  <div class="container outer-layout">
    <div class="half">
      <div class="logo-wrap">
        <Logo></Logo>
      </div>
    </div>
    <div class="half">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Logo from "./Logo";
export default {
  name: "Logging",
  components: {
    Logo,
  },
};
</script>
<style scoped>
.half:first-child {
  background-image: url("../assets/images/pexels-deeana-creates-2565222.jpg");
}
.half {
  width: 50%;
  min-height: 100vh;
}

div.logo-wrap {
  padding: 740px 0px 0px 35px;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.outer-layout {
  padding: 0px 10.20833333333333%;
}
</style>