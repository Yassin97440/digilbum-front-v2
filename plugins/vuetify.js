// plugins/vuetify.ts
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'


const myCustomLightTheme = {
    dark: false,
    colors: {
        background: '#AAFFFF',
        surface: '#BBD6FF',
        primary: '#AA00EE',
        'primary-darken-1': '#3700B3',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    }
}
export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        // your config will come here
        theme: {
            defaultTheme: 'dark',
            themes: {
                myCustomLightTheme
            }
        },
        icons: {
            defaultSet: 'mdi',
        },
    })

    nuxtApp.vueApp.use(vuetify)
})