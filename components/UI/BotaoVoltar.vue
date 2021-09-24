<template>
    <v-footer
      app
      :class="
        $vuetify.breakpoint.smAndDown
          ? 'd-flex justify-center pa-3'
          : 'd-flex justify-center pa-8'
      "
    >
      <v-btn
        color="primary"
        large
        to="/"
      >
        Voltar
      </v-btn>
    </v-footer>
</template>