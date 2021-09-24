<template>
  <v-col :cols="isMobile ? 12 : 5">
    <v-card height="100%" class="pa-3">
      <v-card-title class="d-flex justify-center">
        Insira os Dados
      </v-card-title>

      <v-row align="center" class="d-flex flex-column">
        <v-col :cols="isMobile ? 10 : 8">
          <v-text-field
            v-model="dataBase"
            label="Data Base"
            type="date"
            outlined
          />
        </v-col>

        <v-col :cols="isMobile ? 10 : 8">
          <p class="text-center">
            Tempo de pena
          </p>
          <v-row class="">
            <v-col
              v-for="(item, idx) in itensPena"
              :key="idx"
              class=""
            >
              <v-text-field
                v-model="item.valor"
                :label="item.nome"
                outlined
                type="tel"
                v-mask="'##'"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-card
        :color="backgroundCard[1]"
        class="mt-8"
      >
        <v-card-text :class="['black--text', isMobile ? 'text-subtitle-1' : 'text-h5']">
          <span>
            Este site é uma ferramenta para o advogado moderno, idealizado pela Dra. Cínthia Passos.
            Aproveite! Qualquer dúvida ou sugestão, procure-me no Instagram: @david.noronha
          </span>
        </v-card-text>
      </v-card>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    base: {
      type: String,
      default: ''
    },
    value: {
      type: Array,
      default: []
    },
    isMobile: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      backgroundCard: ['#0277BD', '#80D8FF']
    }
  },
  computed: {
    dataBase: {
      get() {
        return this.base;
      },
      set(value) {
        this.$emit('data', value);
      }
    },
    itensPena: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  }
}
</script>