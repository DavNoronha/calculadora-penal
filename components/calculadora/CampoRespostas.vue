<template>
  <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 7">
    <v-card
      :class="
        $vuetify.breakpoint.smAndDown
          ? 'mt-0 d-flex flex-column align-center justify-center'
          : 'mt-12 d-flex flex-column align-center justify-center'
      "
    >
      <v-card-title>
        Resultado
      </v-card-title>

      <div class="mb-4">
        <h3>
          Final da pena: <span v-if="penaData != 'Invalid Date'">
            {{ dataFormatada(penaData) }}
          </span>
        </h3>
      </div>

      <p class="pb-0">Progressões</p>
      <div v-for="(item, idx) in progressoes" :key="idx">
        <h3>
          {{ item.nome }} da pena: <span v-if="penaData != 'Invalid Date'">
            {{ fracoes[idx] }}
          </span>
        </h3>
      </div>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    dataBase: {
      type: Number,
      default: null
    },
    pena: {
      type: Number,
      default: null
    },
    penaData: {
      type: Date,
      default: {}
    },
  },
  data() {
    return {
      progressoes: [
        { fracao: 1/10, nome: '1/10', valor: '' },
        { fracao: 1/6, nome: '1/6', valor: '' },
        { fracao: 1/2, nome: '1/2', valor: '' },
      ]
    }
  },
  computed: {
    fracoes() {//calculo pode estar funcionando
      if(this.pena) {
        let dataprogressao = [];
        this.progressoes.forEach(item => {
          item.valor = this.dataBase + (this.pena*item.fracao)
          dataprogressao.push(
            this.dataFormatada(new Date(item.valor))
          );
        })
        return dataprogressao;
      }
      return ['Aguardando...', 'Aguardando...', 'Aguardando...'];
    },
  },
  methods: {
    dataFormatada(data) {//formata data somada
      let formatada = `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
      return formatada;
    },
  }
}
</script>