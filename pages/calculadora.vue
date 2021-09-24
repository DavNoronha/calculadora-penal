<template>
  <v-row
    :class="
      $vuetify.breakpoint.smAndDown ? 'd-flex flex-column' : 'mt-2'
    "
  >
    <CampoDados
      v-model="itensPena"
    />

    <CampoRespostas
      :dataBase="dataBaseData"
      :pena="pena"
      :penaData="penaData"
    />

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
      itensPena: [
        { nome: 'Data-base', valor: '' },
        { nome: 'Anos', valor: null },
        { nome: 'Meses', valor: null },
        { nome: 'Dias', valor: null },
      ],
      pena: null
    }
  },
  computed: {
    dataBaseData() {//transforma String 'dataBase' em Date
      let dataNormal = new Date(`${this.itensPena[0].valor} 00:00:00`);
      return dataNormal.getTime();//retorna data em milisegundos
    },
    penaData() {//soma a pena e a dataBase
      let diaMiliAux = 1000*60*60*24;
      let anosMili = diaMiliAux*365*this.itensPena[1].valor;
      let mesesMili = diaMiliAux*30*this.itensPena[2].valor;
      let diasMili = diaMiliAux*this.itensPena[3].valor;

      this.pena = anosMili+mesesMili+diasMili;
      let fimPena = new Date(this.dataBaseData+this.pena);
      return fimPena;
    },
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