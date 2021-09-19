<template>
  <v-row>
    <v-col>
      <v-card class="mt-12 d-flex flex-column align-center justify-center">
        <v-card-title>
          Insira os Dados
        </v-card-title>

        <v-text-field
          v-model="dataBase"
          label="Data Base"
          type="date"
          outlined
        />
        {{datra()}}

        <v-row class="d-flex flex-column align-center my-4">
          <h4>Pena</h4>
          <v-col
            class="item d-flex flex-row align-center"
          >
            <div
              v-for="(value, idx) in pena"
              :key="idx"
            >
              <v-text-field
                v-model="pena[idx].valor"
                v-mask="'##'"
                class="pena_input ma-4"
                :label="value.nome"
                type="tel"
                outlined
              />
            </div>
          </v-col>
        </v-row>

        <v-btn
          color="black--text success mb-12"
          @click="datra()"
          large
          rounded
        >
          Calcular
        </v-btn>
      </v-card>
      {{penaCompleta}}

    </v-col>

    <v-col>
      <v-card class="mt-12 d-flex flex-column align-center justify-center">
        <v-card-title>
          Resultados
        </v-card-title>
        <div v-for="(fracao, idx) in fracoes" :key="idx">
          <v-text-field
            :label="fracao.nome"
            outlined
            readonly
            :value="fracao.valor"
          />
        </div>
      </v-card>
    </v-col>

    <Footer />
  </v-row>
</template>

<script>
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Footer
  },
  data() {
    return {
      dataBase: '',
      // penaCompleta: null,
      // penaDias: null,
      // penaMeses: null,
      // penaAnos: null
      pena: [
        {nome: 'Anos', valor: null},
        {nome: 'Meses', valor: null},
        {nome: 'Dias', valor: null}
      ],
      fracoes: [
        {nome: 'Sem progressão', valor: null},
        {nome: '1/3', valor: null},
        {nome: '1/6', valor: null},
        {nome: '1/10', valor: null}
      ],
    }
  },
  computed: {
    penaCompleta() {
      let data = new Date(`${this.dataBase} 00:00:00`);
      let penaCompletaData = data.setDate(data.getDate() + this.pena[2].valor)

      console.log(penaCompletaData)

      //não preciso da pena em formato de data, só preciso somar os valores na 'dataBase'!

      // let penaCompletaData = `${this.pena[0].valor}-${this.pena[1].valor}-${this.pena[2].valor} 00:00:00`;
      // let penaData = new Date(penaCompletaData);
      return penaCompletaData;
    }
  },
  methods: {
    transforma() {
      let novaPena = `${this.pena[0].valor}-${this.pena[1].valor}-${this.pena[2].valor}`;
      return novaPena;
    },
    datra() {//provavelmente não preciso dessa func
      let data = new Date(`${this.dataBase} 00:00:00`);
      return data.toLocaleDateString('BRL');
    }
  },
  watch: {

  }
}
</script>

<style scoped>
p {
  margin-bottom: 0;
}
.item {
  padding: 0;
}
.pena_input {
  width: 80px;
}
</style>