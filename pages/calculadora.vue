<template>
  <v-row class="d-flex flex-column justify-space-between" align="center">
    <v-col justify="center" align="center" cols="12" sm="8" md="6">
      <v-card class="mt-12 d-flex flex-column align-center justify-center">
        <v-card-title>
          Insira os Dados
        </v-card-title>

        <v-text-field
          label="Data Base"
          type="date"
          outlined
        />
        <v-select
          :items="progressoes"
          label="Tipo de progressão"
          outlined
        />

        <v-btn
          color="black--text success mb-12"
          @click="calcular()"
          large
          rounded
        >
          Calcular
        </v-btn>

        <p
          class="mb-12"
          v-if="calculado"
        >
          <b>
            Sai daqui uns dias!!!!
          </b>
        </p>
      </v-card>
    </v-col>

    <v-footer
      class="d-flex justify-center pa-8"
      fixed
    >
      <v-btn
        color="primary"
        large
        to="/"
      >
        Voltar
      </v-btn>
    </v-footer>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      calculado: false,
      progressoes: [
        "1/3",
        "1/6",
        "1/10"
      ]
    }
  },
  methods: {
    calcular() {
      this.calculado = true;
    }
  }
}
</script>