// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { VDatePicker } from 'vuetify/labs/VDatePicker'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  {
    components: {
      VDatePicker,
    },
    display: {
      mobileBreakpoint: 'sm',
      thresholds: {
        xs: 0,
        sm: 340,
        md: 580,
        lg: 800,
        xl: 1280,
      },
    },
  }
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)
