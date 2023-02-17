<template>
  <div :class="currentWidth">
    <MainInfo />
  </div>
</template>
<script>
import MainInfo from "../components/MainInfo.vue";
export default {
  computed: {
    currentWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs" || "sm":
          return "mainp";
        default:
          return "main";
      }
    },
  },
  components: {
    MainInfo,
  },
};
</script>
<style scoped>
.main {
  background: url("../assets/back.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  background-position: bottom;
}
.mainp {
  background: url("../assets/back.jpg");
  background-repeat: no-repeat;
  background-size: 2000px;
  background-position: bottom 0px right -1300px;
  height: 100%;
}
</style>