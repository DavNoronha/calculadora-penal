export default {
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.smAndDown
    },
    colPai() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 12
        case 'sm': return 9
        case 'md': return 12
        case 'lg': return 10
        case 'xl': return 8
      }
    },
  },
  methods: {

  }
}