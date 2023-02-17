<template>
  <div class="background mt-16 mt-md-6">
    <div class="py-8" v-for="object in objects" :key="object.id">
      <v-row
        :style="mobile.marg"
        :class="mobile.center"
        class="ma-0 no-gutters"
      >
        <v-col cols="12" offset="0" offset-sm="0" md="4" offset-md="1">
          <div class="white pa-2 d-flex justify-center">
            <v-img :src="object.image" min-width="300"></v-img>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="pa-3 mx-md-2"
          style="box-shadow: 0px 10px 0px 0px rgba(255, 158, 28, 1)"
          :class="[mobile.back]"
        >
          <v-container>
            <div class="text-h7 text-sm-h6 text-md-h5 mb-10">
              <span v-html="object.title" class="ubuntu"></span>
            </div>
          </v-container>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      objects: [
        {
          title: `ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ
БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ &quot;ЦЕНТРАЛЬНАЯ
КЛИНИЧЕСКАЯ БОЛЬНИЦА С
ПОЛИКЛИНИКОЙ&quot; УПРАВЛЕНИЯ ДЕЛАМИ
ПРЕЗИДЕНТА РОССИЙСКОЙ ФЕДЕРАЦИИ`,
          subtitle: "",
          image: require("../assets/objects/cch.jpg"),
        },
        {
          title: `ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ
БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ
&quot;ПОЛИКЛИНИКА №4&quot; УПРАВЛЕНИЯ
ДЕЛАМИ ПРЕЗИДЕНТА РОССИЙСКОЙ
ФЕДЕРАЦИИ`,
          subtitle: "",
          image: require("../assets/objects/policlinic.jpg"),
        },
        {
          title: `ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ
АВТОНОМНОЕ УЧРЕЖДЕНИЕ
&quot;НАЦИОНАЛЬНЫЙ МЕДИЦИНСКИЙ
ИССЛЕДОВАТЕЛЬСКИЙ ЦЕНТР ЗДОРОВЬЯ
ДЕТЕЙ&quot; МИНИСТЕРСТВА
ЗДРАВООХРАНЕНИЯ РОССИЙСКОЙ
ФЕДЕРАЦИИ`,
          subtitle: "",
          image: require("../assets/objects/hcc.jpg"),
        },
      ],
    };
  },
  computed: {
    mobile() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return { back: "white-back", marg: "margin:0" };
        case "sm":
          return { back: "white-back", marg: "margin:0" };

        default:
          if (this.currentHeight > 800) {
            return {
              back: "wrapper",
              center: "align-center",
            };
          } else {
            return {
              back: "wrapper",
              marg: "margin-top:80px !important",
              center: "align-center",
            };
          }
      }
    },
  },
};
</script>

<style>
</style>