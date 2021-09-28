<template>
  <v-row justify="center" align="center">
    <v-col justify="center" align="center" cols="12" sm="8" md="6">
      <v-card
        class="mx-auto d-flex flex-column align-center justify-space-between"
        min-height="350"
        max-width="650"
      >
        <v-card-text class="mt-12 text-center text-h6">
          <h1>Agora ficou fácil fazer seus cálculos penais!</h1>
        </v-card-text>

        <v-btn
          class="mb-12 white--text"
          color="green"
          elevation="8"
          height="60px"
          rounded
          to="/calculadora"
          width="300px"
        >
          <h3>Calcule Agora</h3>
        </v-btn>

        <v-row justify="center" class="mb-3">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                dark
                color="#9575CD"
                large
                right
                v-bind="attrs"
                v-on="on"
              >
                mdi-checkbox-marked-circle
              </v-icon>
            </template>
            <v-card
              width="400"
              :color="backgroundCard[2]"
            >
              <v-card-text :class="['white--text', mobile ? 'text-subtitle-1' : 'text-h5']">
                <span>
                  Este site é uma ferramenta para o advogado moderno, idealizado pela Dra. Cínthia Passos.
                  Aproveite! Qualquer dúvida ou sugestão, procure-me no Instagram:
                    <a href="https://www.instagram.com/david.noronha/">@david.noronha</a>
                </span>
              </v-card-text>
            </v-card>
          </v-tooltip>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      backgroundCard: ['#0277BD', '#80D8FF', '#6200EA']
    }
  }
}
</script>

<style scoped>
.text-h6 {
  line-height: 50px;
}
</style>