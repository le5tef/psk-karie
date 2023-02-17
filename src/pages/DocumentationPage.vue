<template>
  <v-row class="background ma-0 pa-0 align-center" style="min-height: 100vh">
    <Carousel @change-slide="dropIndex($event)" />
    <Info :slide="slide" />
  </v-row>
</template>
<script>
import Info from "../components/DocumentationInfo.vue";
import Carousel from "../components/Carousel.vue";
export default {
  data() {
    return {
      slide: 0,
    };
  },

  methods: {
    dropIndex(currentSlide) {
      this.slide = currentSlide;
    },
  },
  components: {
    Info,
    Carousel,
  },
};
</script>