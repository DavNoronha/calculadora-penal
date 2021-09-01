<template>
  <v-row justify="center" align="center">
    <v-col justify="center" align="center" cols="12" sm="8" md="6">
      <v-hover
        class="mt-12"
        v-slot="{ hover }"
      >
        <v-card
          :elevation="hover ? 12 : 2"
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
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<style scoped>
.text-h6 {
  line-height: 50px;
}
</style>