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
            </div>
          </div>
        </div>
      </v-card>
    </v-col>

    <v-col
      cols="7"
    >
      <v-card class="mt-12 d-flex flex-column align-center justify-center">
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
        { nome: 'Anos', valor: null },
        { nome: 'Meses', valor: null },
        { nome: 'Dias', valor: null },
      ],
    }
  },
  computed: {
    dataBaseData() {
      let dataNormal = new Date(`${this.dataBase} 00:00:00`);
      return dataNormal.getTime();//retorna data em milisegundos
    },
    penaData() {
      let diaMiliAux = 1000*60*60*24;
      let anosMili = diaMiliAux*365*this.itensPena[0].valor;
      let mesesMili = diaMiliAux*30*this.itensPena[1].valor;
      let diasMili = diaMiliAux*this.itensPena[2].valor;

      let fimPena = new Date(this.dataBaseData+anosMili+mesesMili+diasMili);
      return fimPena;
    },
    dataFormatada() {
      let formatada =
        `${this.penaData.getDate()}/${this.penaData.getMonth()+1}/${this.penaData.getFullYear()}`

      return formatada;
    }
  },
}
</script>