<template>
  <header class="layout">
    <nav class="container flex-s-between">
      <Logo></Logo>
      <ul class="container flex-s-between">
        <li class="container">
          <a class="active" href="#">Home</a>
        </li>
        <li class="container">
          <a href="#">Hotels</a>
        </li>
        <li class="container">
          <a href="#">Promotions<i class="far fa-angle-down"></i></a>
        </li>
        <li class="container">
          <a href="#">Destinations<i class="far fa-angle-down"></i></a>
        </li>
        <li class="container">
          <a href="#">Voucher</a>
        </li>
        <li class="container">
          <a href="#">About Us</a>
        </li>
      </ul>
      <div class="container flex-s-between sign-container">
        <a href="#">Sign Up</a>
        <a class="login" href="#">log in</a>
      </div>
    </nav>
  </header>
</template>

<script>
import Logo from "./Logo";
export default {
  name: "AppHeader",
  components: {
    Logo,
  },
};
</script>
<style scoped>
header {
  height: 60px;
  background-color: #2d2d2d;
  position: sticky;
  top: 0;
  z-index: 100;
}

li a {
  color: #9f9f9f;
}
.active {
  color: #e0ad1e;
}
.sign-container a {
  text-align: center;
}

ul {
  list-style-type: none;
  margin: 0%;
  padding: 0;
  flex-grow: 0.5;
}

a {
  font-family: playfair-display;
  color: #e4e4e4;
  margin: auto 5px;
}

a.login {
  width: 113px;
  height: 34px;
  border: 1px solid #e0ad1e;
  border-radius: 5px;
  line-height: 36px;
}
</style>