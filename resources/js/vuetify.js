import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#008891',
                secondary: '#00587a',
                background: '#0f3057',
                error: colors.red.accent3,
                // primary: colors.teal.darken4,
                // secondary: colors.grey.lighten4,
                // background: colors.white,
                // error: colors.red.accent3,
            },
            dark: {
                primary: colors.teal.lighten2,
            },
        },
    },
})