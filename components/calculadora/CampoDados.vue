<template>
  <v-col :cols="mobile ? 12 : 5">
    <v-card height="100%" class="pa-3">
      <v-card-title class="d-flex justify-center">
        Insira os Dados
      </v-card-title>

      <v-row align="center" class="d-flex flex-column">
        <v-col :cols="mobile ? 10 : 8">
          <p class="text-center">
            Data-base
          </p>
          <v-text-field
            v-model="dataBase"
            v-mask="'##/##/####'"
            :error="verificaData.invalida"
            :error-messages="verificaData.text"
            outlined
            label="Data-Base"
            type="tel"
          />
        </v-col>

        <v-col :cols="mobile ? 10 : 8">
          <p class="text-center">
            Tempo de pena
          </p>
          <v-row>
            <v-col
              v-for="(item, idx) in itensPena"
              :key="idx"
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

        <v-col :cols="mobile ? 10 : 8">
          <p class="text-center">
            Dias de remição
          </p>
          <v-row>
            <v-col>
              <v-text-field
                v-model="diasRemicao"
                label="Dias remidos"
                outlined
                type="tel"
                v-mask="'####'"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
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
    remicao: {
      type: String,
      default: null
    },
    verificaData: {
      type: Object,
      default: ()=>({})
    }
  },
  data() {
    return {
      backgroundCard: ['#0277BD', '#80D8FF', '#6200EA']
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
    },
    diasRemicao: {
      get() {
        return this.remicao;
      },
      set(value) {
        this.$emit('diasRemicao', value);
      }
    }
  }
}
</script>