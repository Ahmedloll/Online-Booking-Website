<template>
  <header class="container flex-s-between layout">
    <nav class="container flex-s-between">
      <div class="container flex-s-between">
        <img src="../assets/logo.png" />
        <h3>NKN</h3>
      </div>

      <ul class="container flex-s-between">
        <li class="container">
          <a href="#">Home</a>
        </li>
        <li class="container">
          <a href="#">Hotels</a>
        </li>
        <li class="container">
          <a href="#">Promotions</a>
        </li>
        <li class="container">
          <a href="#">Destinations</a>
        </li>
        <li class="container">
          <a href="#">Voucher</a>
        </li>
        <li class="container">
          <a href="#">About Us</a>
        </li>
      </ul>
      <div class="container flex-s-between">
        <a href="#">Sign Up</a>
        <a class="login" href="#">log in</a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>
<style scoped>
header {
  background-color: #2d2d2d;
  height: 60px;
}
nav {
  width: 100%;
}
img {
  width: 45px;
  height: 60px;
}
h3 {
  color: #ffffff;
}
ul {
  list-style-type: none;
  margin: 0%;
  padding: 0;
  flex-grow: 0.5;
}
li {
  margin: 0 0.25%;
}
a {
  color: #e4e4e4;
  margin: auto 5px;
}
li a {
  color: #9f9f9f;
}
div a {
  text-align: center;
  margin: 20;
}
a.login {
  width: 113px;
  height: 34px;
  border: 1px solid #e0ad1e;
  border-radius: 5px;
  line-height: 36px;
}
</style>