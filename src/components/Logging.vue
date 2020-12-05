<template>
  <div class="container">
    <div class="half">
      <div class="logo-wrap">
        <Logo></Logo>
      </div>
    </div>
    <div class="half">
      <SignUp></SignUp>
    </div>
  </div>
</template>
<script>
import Logo from "./Logo";
import SignUp from "./SignUp";
export default {
  name: "Logging",
  components: {
    Logo,
    SignUp,
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
</style>