<template>
  <footer class="container flex-s-between">
    <div>
      <Logo></Logo>
      <div class="connections">
        <i class="fal fa-map-marker-alt"></i>
        302 Willburn Mountain Apt,518
      </div>
      <div class="connections">
        <i class="fal fa-phone-alt"></i>
        685-290-5343
      </div>
      <div class="connections">
        <i class="fal fa-envelope"></i>
        angel_olson@gmail.com
      </div>
    </div>

    <div class="container">
      <div class="ulist">
        <h3>OUR SERVICES</h3>
        <ul>
          <li><a href="#">Hotels/Resorts</a></li>
          <li><a href="#">Combo</a></li>
          <li><a href="#">Voucher</a></li>
          <li><a href="#">Promotions</a></li>
          <li><a href="#">Destinayions</a></li>
        </ul>
      </div>
      <div class="ulist">
        <h3>About US</h3>
        <ul>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Partner</a></li>
          <li><a href="#"></a>Sign In / Sign Up</li>
        </ul>
      </div>
    </div>
    <div>
      <form>
        <input type="text" placeholder="Enter your Mail" />
        <input type="submit" value="Send" />
      </form>
      <div>
        <span>Follow Us</span>
        <ul class="container icons">
          <li>
            <a target="_blank" href="https://linkedin.com/in/ahmed-alaa-011501">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://linkedin.com/in/ahmed-alaa-011501">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://linkedin.com/in/ahmed-alaa-011501">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://linkedin.com/in/ahmed-alaa-011501">
              <i class="fab fa-linkedin-in"></i>
            </a>
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
  color: #ffffff;
  font-family: playfair-display;
}
.connections i {
  color: #e0ad1e;
}
.connections {
  margin: 15px 0px;
  font-size: 14px;
  line-height: 19px;
}
.ulist {
  margin: 0px 25px;
}
.ulist li {
  margin-bottom: 10px;
}
.ulist li a {
  text-decoration: none;
  color: #ffffff;
}
form {
  display: flex;
}
form input[type="text"] {
  padding: 10px;
  width: 233px;
  height: 28px;
  border: none;
  border-radius: 3px 0px 0px 3px;
  margin-bottom: 25px;
}
form input[type="submit"] {
  padding: 0px;
  width: 113px;
  height: 48px;
  border-radius: 0px 3px 3px 0px;
  border: none;
  background-color: #e0ad1e;
  color: #ffffff;
  font-family: playfair-display;
  font-size: 14px;
  line-height: 19px;
}
/* ////////// */

h3 {
  color: #ffffff;
  padding-bottom: 10px;
}
ul {
  padding: 0;
  list-style-position: inside;
}
.icons li {
  list-style: none;
  height: 36px;
  line-height: 40px;
  width: 36px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: #ffffff;
  text-align: center;
}
.icons a {
  color: #2d2d2d;
}
</style>