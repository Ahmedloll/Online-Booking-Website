<template>
  <section class="s-padding-tob-bottom">
    <div class="search-div">
      <form class="bgwhite container">
        <div class="icon-handler">
          <input type="text" placeholder="Destinattions" />
          <i class="fal fa-map-marker-alt"></i>
        </div>
        <div class="icon-handler">
          <input type="text" placeholder="Check in- Check out" />
          <i class="fal fa-calendar"></i>
        </div>
        <div class="icon-handler">
          <input type="text" placeholder="0 Adults - 0 Child - Room" />
          <i class="fal fa-user"></i>
        </div>
        <div class="icon-handler">
          <input type="submit" class="bgdark" />
          <i class="far fa-search"></i>
        </div>
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
  background-image: url("../assets/images/1_NN6yjhIZZucXt8k_uOvljw.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 100px;
  padding-top: 400px;
  text-align: -webkit-center;
}
@media only screen and (max-width: 1350px) {
  form {
    width: 30%;
  }
}
form {
  width: 66%;
  padding: 12px 10px;
  border-radius: 3px;
}
input,
input[type="submit"] {
  width: 75%;
  padding: 0 10px 0 28px;
  height: 34px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  margin: 0px 5px;
}

input[type="submit"] {
  width: 100%;
  font-family: playfair-display;
  font-size: 14px;
  line-height: 19px;
  color: #e0ad1e;
  padding: 0;
}
@media only screen and (max-width: 1350px) {
  .icon-handler {
    width: 100%;
  }
  .container {
    flex-direction: column;
  }
}
.icon-handler {
  width: 25%;
  position: relative;
}
.icon-handler i {
  position: absolute;
  left: 13px;
  top: 8px;
}
input[type="submit"] + i {
  color: #e0ad1e;
  left: 45px;
  top: 5px;
}
</style>