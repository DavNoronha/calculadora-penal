<template>
  <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 7">
    <v-card
      :class="
        $vuetify.breakpoint.smAndDown
          ? 'mt-0 d-flex flex-column align-center justify-center'
          : 'mt-12 d-flex flex-column align-center justify-center'
      "
    >
      <v-card-title>
        Resultado
      </v-card-title>

      <div class="mb-4">
        <h3>
          Final da pena: <span v-if="penaData != 'Invalid Date'">{{ dataFormatada }}</span>
        </h3>
      </div>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    penaData: {
      type: Date,
      default: {}
    },
    dataFormatada: {
      type: String,
      default: ''
    }
  }
}
</script>