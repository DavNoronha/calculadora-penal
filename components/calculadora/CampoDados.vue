<template>
  <v-col
    justify="center"
    align="center"
    :cols="$vuetify.breakpoint.smAndDown ? 12 : 5"
  >
    <v-card
      :class="
        $vuetify.breakpoint.smAndDown
          ? 'mt-0 d-flex flex-column align-center justify-center'
          : 'mt-12 d-flex flex-column align-center justify-center'
      "
    >
      <div class="my-3">
        <p>
          Insira os Dados
        </p>
        <v-text-field
          v-model="itensPena[0].valor"
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
              v-if="idx != 0"
              v-model="item.valor"
              :label="item.nome"
              outlined
            />
          </div>
        </div>
      </div>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    value: Array
  },
  computed: {
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