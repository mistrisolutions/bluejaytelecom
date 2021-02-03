import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/lib/util/colors'
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.green,
                secondary: colors.grey.lighten4,
                background: colors.white,
                error: colors.red.accent3,
            },
            dark: {
                primary: colors.teal.lighten2,
            },
        },
    },
})
