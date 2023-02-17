<template>
  <v-app style="height: 100%"
    ><Header />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
.croogla {
  font-family: "Croogla";
  font-weight: 100;
  font-size: 18px;
}
.oswald {
  font-family: "Oswald";
}
.ubuntu {
  font-family: "Ubuntu";
}
.russo {
  font-family: "Russo";
}
.wrapper {
  background: #fcfef1;
  box-shadow: 17px 17px 0px 0px rgba(255, 158, 28, 1);
}
.white-back {
  background: #fcfef1;
}
.background {
  background: linear-gradient(
    45deg,
    rgba(214, 244, 255, 1) 0%,
    rgba(90, 209, 251, 1) 100%
  );
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  background-position: bottom;
}
@font-face {
  font-family: "Russo";
  src: url("./assets/fonts/RussoOne.ttf");
}
@font-face {
  font-family: "Croogla";
  src: url("./assets/fonts/Croogla4F.ttf");
}
@font-face {
  font-family: "Ubuntu";
  src: url("./assets/fonts/Ubuntu-Bold.ttf");
}
@font-face {
  font-family: "Oswald";
  src: url("./assets/fonts/Oswald.ttf");
}
</style>

