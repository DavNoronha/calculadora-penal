<template>
  <v-row
    :class="
      $vuetify.breakpoint.smAndDown ? 'd-flex flex-column' : ''
    "
  >
    <CampoDados
      v-model="itensPena"
    />

    <CampoRespostas
      :penaData="penaData"
      :dataFormatada="dataFormatada"
    />

    <BotaoVoltar/>
  </v-row>
</template>

<script>
import CampoDados from '~/components/calculadora/CampoDados.vue';
import CampoRespostas from '~/components/calculadora/CampoRespostas.vue';
import BotaoVoltar from '~/components/BotaoVoltar.vue';

export default {
  components: {
    CampoDados,
    CampoRespostas,
    BotaoVoltar,
  },
  data() {
    return {
      itensPena: [
        { nome: 'Data-base', valor: '' },
        { nome: 'Anos', valor: null },
        { nome: 'Meses', valor: null },
        { nome: 'Dias', valor: null },
      ],
    }
  },
  computed: {
    dataBaseData() {
      let dataNormal = new Date(`${this.itensPena[0].valor} 00:00:00`);
      return dataNormal.getTime();//retorna data em milisegundos
    },
    penaData() {
      let diaMiliAux = 1000*60*60*24;
      let anosMili = diaMiliAux*365*this.itensPena[1].valor;
      let mesesMili = diaMiliAux*30*this.itensPena[2].valor;
      let diasMili = diaMiliAux*this.itensPena[3].valor;

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