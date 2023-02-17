<template>
  <div
    class="background d-flex align-center justify-center pa-8"
    style="height: 100vh"
  >
    <span
      class="croogla"
      :style="{ fontSize: $vuetify.breakpoint.smAndDown ? '30px' : '50px' }"
      style="color: white; font-weight: 900"
      >В разработке</span
    >
    <v-icon color="white" class="text-h2">mdi-cog</v-icon>
  </div>
</template>