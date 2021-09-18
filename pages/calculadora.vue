<template>
  <v-row>
    <v-col
      justify="center"
      align="center"
      cols="5"
    >
      <v-card class="mt-12 d-flex flex-column align-center justify-center">
        <div class="my-3">
          <p>
            Insira os Dados
          </p>
          <v-text-field
            v-model="dataBase"
            label="Data Base"
            type="date"
            outlined
          />
        </div>

        <div>
          <p>
            Insira a pena
          </p>
          <div class="d-flex px-10">
            <div
              v-for="(item, idx) in itensPena"
              :key="idx"
              class="px-2"
            >
              <v-text-field
                v-model="item.valor"
                :label="item.nome"
                outlined
              />
              {{ item.valor }}
            </div>
            {{ penaData }}
          </div>
        </div>

        <v-btn
          color="black--text success mb-12"
          @click="calcular()"
          large
          rounded
        >
          Calcular
        </v-btn>
      </v-card>
    </v-col>

    <v-col
      cols="7"
    >
      <v-card class="mt-12 d-flex flex-column align-center justify-center">
        <v-card-title>
          Resultado
        </v-card-title>

        {{ resultadoData }}

        <v-text-field
          v-model="resultado"
          label="Resultado"
          type="tel"
          outlined
        />
      </v-card>
    </v-col>

    <BotaoVoltar/>
  </v-row>
</template>

<script>
import BotaoVoltar from '~/components/BotaoVoltar.vue';

export default {
  components: {
    BotaoVoltar
  },
  data() {
    return {
      dataBase: '',
      calculado: false,
      itensPena: [
        { nome: 'ano', valor: null },
        { nome: 'mes', valor: null },
        { nome: 'dia', valor: null },
      ],
      resultado: null,
    }
  },
  computed: {
    resultadoData() {
      return new Date(`${this.dataBase} 00:00:00`);
    },
    penaData() {
      let pena = `${this.itensPena[0].valor}-${this.itensPena[1].valor}-${this.itensPena[2].valor} 00:00:00`;
      return console.log(new Date(pena))
    }
  },
  methods: {
    calcular() {
      this.calculado = true;
    }
  }
}
</script>