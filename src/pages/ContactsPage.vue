<template>
  <v-row class="background ma-0 align-center">
    <Map class="pa-0" />
    <Contacts class="mt-md-0" />
  </v-row>
</template>
<script>
import Contacts from "../components/Contacts.vue";
import Map from "../components/MapVidget.vue";
export default {
  components: {
    Map,
    Contacts,
  },
};
</script>