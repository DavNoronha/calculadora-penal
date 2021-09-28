<template>
  <v-col :cols="mobile ? 12 : 7">
    <v-card height="100%" class="pa-3">
      <v-card-title color="#651FFF" class="d-flex justify-center">
        Resultado
      </v-card-title>

      <v-row justify="center">
        <v-col :cols="mobile ? 12 : 8">
          <v-card :color="backgroundCard[2]" class="pa-1 text-center">
            <p class="text-h6">
              Fim da pena:
              <span class="text-h4" v-if="penaData != 'Invalid Date'">
                {{ fimDaPena }}
              </span>
            </p>
          </v-card>
        </v-col>
      </v-row>

      <v-row align="center" class="d-flex flex-column pb-3">
        <v-col :cols="mobile ? 12 : 8">
          <v-card :color="backgroundCard[0]" class="pa-3">
            <p class="text-h6">Frações</p>
            <v-row>
              <v-col
                v-for="(item, idx) in progressoes.fracoes"
                :key="idx"
                :cols="mobile ? 6 : 4"
                class="pa-2"
              >
                <p class="text-subtitle-2">
                  {{ item.nome }} da pena:
                  <span class="text-h6" v-if="penaData != 'Invalid Date'">
                    {{ fracoes[idx] }}
                  </span>
                </p>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col :cols="mobile ? 12 : 8">
          <v-card :color="backgroundCard[1]" class="pa-3">
            <p class="text-h6">Porcentagens</p>
            <v-row>
              <v-col
                v-for="(item, idx) in progressoes.porcentagens"
                :key="idx"
                :cols="mobile ? 6 : 4"
                class="pa-2"
              >
                <p class="text-subtitle-2">
                  {{ item.nome }} da pena:
                  <span class="text-h6" v-if="penaData != 'Invalid Date'">
                    {{ porcentagens[idx] }}
                  </span>
                </p>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
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
    remicao: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      progressoes: {
        fracoes: [
          { fracao: 1/6, nome: '1/6', valor: '' },
          { fracao: 2/5, nome: '2/5', valor: '' },
          { fracao: 3/5, nome: '3/5', valor: '' },
        ],
        porcentagens: [
          { porcentagem: 16/100, nome: '16%', valor: '' },
          { porcentagem: 20/100, nome: '20%', valor: '' },
          { porcentagem: 25/100, nome: '25%', valor: '' },
          { porcentagem: 30/100, nome: '30%', valor: '' },
          { porcentagem: 40/100, nome: '40%', valor: '' },
          { porcentagem: 60/100, nome: '60%', valor: '' },
          { porcentagem: 70/100, nome: '70%', valor: '' },
        ]
      },
      backgroundCard: ['#0277BD', '#651FFF', '#D84315']
    }
  },
  computed: {
    fimDaPena() {
      let fim = this.penaData.getTime() - this.remicao;
      return this.dataFormatada(new Date(fim));
    },
    fracoes() {//calculo das frações para progressão de regime
      if(this.pena) {
        let dataprogressao = [];
        this.progressoes.fracoes.forEach(item => {
          item.valor = this.dataBase + (this.pena * item.fracao) - this.remicao;
          dataprogressao.push(
            this.dataFormatada(new Date(item.valor))
          );
        })
        return dataprogressao;
      }
      return ['Aguardando...', 'Aguardando...', 'Aguardando...'];
    },
    porcentagens() {//calculo das porcentagens para progressão de regime
      if(this.pena) {
        let dataprogressao = [];
        this.progressoes.porcentagens.forEach(item => {
          item.valor = this.dataBase + (this.pena * item.porcentagem) - this.remicao;
          dataprogressao.push(
            this.dataFormatada(new Date(item.valor))
          );
        });
        return dataprogressao;
      }
      return ['Aguardando...', 'Aguardando...', 'Aguardando...', 'Aguardando...', 'Aguardando...', 'Aguardando...', 'Aguardando...'];
    },
  },
  methods: {
    dataFormatada(data) {//formata data somada
      return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    },
  }
}
</script>