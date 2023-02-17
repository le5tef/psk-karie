<template>
  <v-col
    md="12"
    cols="12"
    offset-md="0"
    style="margin-bottom: -7px; margin-top: 80px"
  >
    <iframe
      src="https://yandex.ru/map-widget/v1/-/CCUqIMtOoD"
      :width="sizes.width"
      :height="sizes.height"
      allowfullscreen="true"
      style="position: relative; border: none"
    ></iframe>
  </v-col>
</template>
<script>
export default {
  computed: {
    sizes() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return {
            width: "100%",
            height: window.innerHeight / 2,
          };
        case "sm":
          return {
            width: "100%",
            height: window.innerHeight / 2,
          };
        case "md":
          return {
            width: "120%",
            height: window.innerHeight,
          };
        default:
          return {
            width: "120%",
            height: window.innerHeight - 80,
          };
      }
    },
  },
};
</script>