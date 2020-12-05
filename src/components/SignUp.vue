<template>
  <div class="signUp">
    <h1>CREATE NEW ACCOUNT</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui commodi
      dolorem illo odit, tenetur eligendi sint fugit eum laudantium
    </p>
    <form class="col-container">
      <label>Email Address</label>
      <input type="email" placeholder="company@company.com" required />
      <label>Password</label>
      <input type="password" placeholder="8-20 Characters" required />
      <label>Confirm Password</label>
      <input type="password" placeholder="Confirm your password" required />
      <div class="container flex-s-between">
        <input type="submit" class="bgdark" value="Sign up" />
        <div>
          <span>Already have an account? <a href="#">Login</a></span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUp",
};
</script>
<style scoped>
.signUp {
  font-family: playfair-display;
  padding: 130px 75px;
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
  padding: 0px 20px;
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
input[placeholder="Confirm your password"] + div {
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
</style>