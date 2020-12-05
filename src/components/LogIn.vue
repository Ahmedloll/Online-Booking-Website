<template>
  <div class="signUp">
    <h1>SIGN IN NOW</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui commodi
      dolorem illo odit, tenetur eligendi sint fugit eum laudantium
    </p>
    <form class="col-container">
      <label>Email Address</label>
      <input type="email" placeholder="company@company.com" required />
      <label>Password</label>
      <input type="password" placeholder="8-20 Characters" required />
      <div class="container flex-s-between">
        <input type="submit" class="bgdark" value="Sign in" />
        <div>
          <span
            >You don't have an account?
            <router-link v-bind:to="'/logging/signup'"
              >Sign up</router-link
            ></span
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LogIn",
};
</script>
<style scoped>
.signUp {
  font-family: playfair-display;
  padding: 130px 8%;
  margin: 0;
}
h1 {
  color: #072d4f;
  font-size: 35px;
  font-weight: 750;
}
p {
  color: #9199b6;
  width: 90%;
  margin-bottom: 40px;
}
label {
  font-size: 20px;
  line-height: 27px;
  font-weight: 700;
}
input {
  font-family: playfair-display;
  font-size: 16px;
  padding: 0px 2%;
  width: 458px;
  height: 58px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  margin: 0px 0px 40px;
}
input[type="submit"] {
  width: 175px;
  color: #e0ad1e;
  letter-spacing: 0.34px;
  height: 50px;
  border: none;
  border-radius: 3px;
  margin: 0;
}
input[placeholder="8-20 Characters"] + div {
  width: 500px;
}
input[type="submit"] + div {
  height: fit-content;
  margin: auto 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
}
input[type="submit"] + div a {
  color: #e0ad1e;
}
.col-container {
  display: flex;
  flex-direction: column;
}
.bgdark {
  background-color: #2d2d2d;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.flex-s-between {
  justify-content: space-between;
}
</style>