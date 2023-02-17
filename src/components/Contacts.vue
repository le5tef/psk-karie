<template>
  <v-col
    cols="12"
    offset="0"
    offset-lg="1"
    md="5"
    lg="4"
    :style="contactsPosition.style"
    class="pa-4 pa-sm-16 wrapper"
  >
    <v-container>
      <div class="text-h4 text-md-h3 text-lg-h2 orange-underline mb-10">
        <span class="ubuntu">Контакты</span>
      </div>
      <div class="text-h5 text-md-h4">
        <span class="ubuntu">Номер телефона:</span>
      </div>
      <div class="text-h6 text-md-h4">
        <span style="">+7(495)798-33-81</span>
      </div>
      <div class="text-h5 text-md-h4">
        <span class="ubuntu">Наш адрес:</span>
      </div>
      <div class="text-h6 text-md-h4">
        <span>г. Одинцово, д. Бутынь, дом 1, офис 2</span>
      </div>
      <div class="text-h5 text-md-h4">
        <span class="ubuntu">Наша почта:</span>
      </div>
      <div class="text-h6 text-md-h4"><span>info@psk-karie.ru</span></div>
    </v-container>
  </v-col>
</template>
<script>
export default {
  computed: {
    contactsPosition() {
      switch (this.$vuetify.breakpoint.name) {
        case "lg":
          return {
            style: "position:absolute",
            size: "",
          };
        case "xl":
          return {
            style: "position:absolute",
            size: "",
          };
        case "md":
          return {
            style: "position:absolute",
            size: "",
          };
        default:
          return {
            style: "",
            size: "",
          };
      }
    },
  },
};
</script>