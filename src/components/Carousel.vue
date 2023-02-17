<template>
  <v-col
    cols="10"
    sm="6"
    md="4"
    lg="3"
    offset="1"
    offset-sm="3"
    offset-md="1"
    offset-lg="2"
    class="mt-16 mt-md-0"
  >
    <v-card max-width="100%" class="mx-auto">
      <v-system-bar lights-out></v-system-bar>
      <v-carousel
        :continuous="false"
        :cycle="cycle"
        :show-arrows="true"
        hide-delimiter-background
        v-model="currentSlide"
        :height="heightController"
      >
        <v-carousel-item v-for="(doc, i) in 8" :key="doc.id" :src="getImage(i)">
        </v-carousel-item>
      </v-carousel>
      <v-system-bar lights-out></v-system-bar>
    </v-card>
  </v-col>
</template>
<script>
export default {
  data() {
    return {
      currentSlide: 0,

      cycle: false,
    };
  },
  watch: {
    currentSlide(currentSlide) {
      this.$emit("change-slide", currentSlide);
    },
  },
  computed: {
    heightController() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 450;
        case "sm":
          return 550;

        default:
          return 650;
      }
    },
  },
  methods: {
    getImage(id) {
      var image = require.context("../assets/docs/pngs/", false, /.png$/);
      return image("./" + (id + 1) + ".png");
    },
  },
};
</script>