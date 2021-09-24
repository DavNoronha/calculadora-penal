<template>
  <v-app light>
    <v-app-bar
      app
      absolute
      class="d-flex justify-center align-center"
      color="#fcb69f"
      dark
      elevation="12"
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques-2"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.4), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-title>
        <h2>
          Calculadora Penal
        </h2>
      </v-app-bar-title>

    </v-app-bar>
    <v-main app>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  }
}
</script>
