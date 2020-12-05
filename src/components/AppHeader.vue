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
        <li class="container dropdown">
          <a href="#">Promotions<i class="far fa-angle-down"></i></a>
          <div class="dropdown-content">
            <ul>
              <li><a href="#">Promotions</a></li>
              <li><a href="#">Promotions</a></li>
              <li><a href="#">Promotions</a></li>
            </ul>
          </div>
        </li>
        <li class="container dropdown">
          <a href="#">Destinations <i class="far fa-angle-down"></i></a>
          <div class="dropdown-content">
            <ul>
              <li><a href="#">Destinations</a></li>
              <li><a href="#">Destinations</a></li>
              <li><a href="#">Destinations</a></li>
            </ul>
          </div>
        </li>
        <li class="container">
          <a href="#">Voucher</a>
        </li>
        <li class="container">
          <a href="#">About Us</a>
        </li>
      </ul>
      <div class="container flex-s-between sign-container">
        <router-link v-bind:to="'/logging/signup'">Sign up</router-link>
        <router-link class="login" v-bind:to="'/logging/login'"
          >Sign in</router-link
        >
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
li i {
  line-height: 0.5px;
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

.dropdown-content {
  display: none;
  position: absolute;
  top: 70px;
  background-color: #2d2d2d;
  color: #9f9f9f;
  min-width: 160px;
  padding: 12px 16px;
  z-index: 1;
}
.dropdown-content li {
  margin-top: 15px;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>