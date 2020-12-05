<template>
  <footer class="container flex-s-between">
    <div>
      <Logo></Logo>
      <div>302 Willburn Mountain Apt,518</div>
      <div>685-290-5343</div>
      <div>angel_olson@gmail.com</div>
    </div>

    <div class="container">
      <div>
        <h3>OUR SERVICES</h3>
        <ul>
          <li>Hotels/Resorts</li>
          <li>Combo</li>
          <li>Voucher</li>
          <li>Promotions</li>
          <li>Destinayions</li>
        </ul>
      </div>
      <div>
        <h3>OUR SERVICES</h3>
        <ul>
          <li>Hotels/Resorts</li>
          <li>Combo</li>
          <li>Voucher</li>
          <li>Promotions</li>
          <li>Destinayions</li>
        </ul>
      </div>
    </div>
    <div>
      <form>
        <input type="text" />
        <input type="submit" />
      </form>
      <div>
        <span>Follow Us</span>
        <ul class="container icons">
          <li>
            <a><i class="fab fa-twitter"></i></a>
          </li>
          <li>
            <a><i class="fab fa-youtube"></i></a>
          </li>
          <li>
            <a><i class="fab fa-facebook-f"></i></a>
          </li>
          <li>
            <a><i class="fab fa-instagram"></i></a>
          </li>
        </ul>
      </div>

      <div></div>
    </div>
  </footer>
</template>
<script>
import Logo from "./Logo";
export default {
  name: "Footer",
  components: {
    Logo,
  },
};
</script>
<style scoped>
footer {
  padding: 40px 10.20833333333333%;
}
img {
  width: 45px;
  height: 60px;
}
h3 {
  color: #ffffff;
}
ul {
  padding: 0;
}
.icons li {
  list-style: none;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: #ffffff;
  text-align: center;
}
.icons a {
  line-height: 36px;
}
</style>