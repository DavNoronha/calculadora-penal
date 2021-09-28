<template>
  <v-row
    :class="
      mobile
        ? 'd-flex flex-column align-center'
        : 'd-flex justify-center'
    "
  >
    <v-col :cols="colPai">
      <v-row>
        <CampoDados
          v-model="itensPena"
          :base="dataBase"
          @data="dataBase = $event"
          :remicao="remicao"
          @diasRemicao="remicao = $event"
          :verificaData="dataInvalida"
        />

        <CampoRespostas
          :dataBase="dataBaseData"
          :pena="pena"
          :penaData="penaData"
          :remicao="remicaoMili"
        />
      </v-row>
    </v-col>
    <BotaoVoltar/>
  </v-row>
</template>

<script>
import CampoDados from '~/components/calculadora/CampoDados.vue';
import CampoRespostas from '~/components/calculadora/CampoRespostas.vue';
import BotaoVoltar from '~/components/UI/BotaoVoltar.vue';

export default {
  components: {
    CampoDados,
    CampoRespostas,
    BotaoVoltar,
  },
  data() {
    return {
      dataBase: '',
      itensPena: [
        { nome: 'Anos', valor: null },
        { nome: 'Meses', valor: null },
        { nome: 'Dias', valor: null },
      ],
      pena: null,
      remicao: null
    }
  },
  computed: {
    dataBaseData() {//transforma String 'dataBase' em Date
      let dataConvertida = this.dataBase.split('/').reverse().join('-');
      let dataNormal = new Date(`${dataConvertida} 00:00:00`);
      return dataNormal.getTime();//retorna data em milisegundos
    },
    penaData() {//soma a pena e a dataBase
      let diaMiliAux = 1000*60*60*24;
      let anosMili = diaMiliAux*365*this.itensPena[0].valor;
      let mesesMili = diaMiliAux*30*this.itensPena[1].valor;
      let diasMili = diaMiliAux*this.itensPena[2].valor;

      this.pena = anosMili+mesesMili+diasMili;
      let fimPena = new Date(this.dataBaseData+this.pena);
      return fimPena;
    },
    remicaoMili() {
      let diaMiliAux = 1000*60*60*24;
      return +this.remicao * diaMiliAux;
    },
    dataInvalida() {
      if(this.dataBase != '' && this.penaData == 'Invalid Date') {
        return {
          invalida: true,
          text: 'Data invalida, tente novamente!'
        }
      }
    }
  },
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