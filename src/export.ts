import { createApp } from 'vue'
import App from './App.vue'
import WindflowMagicToolbar from './components/WindflowMagicToolbar.vue'
import WindflowApp from './components/WindflowApp.vue'
import WindflowArea from './components/WindflowArea.vue'
import WindflowLayout from './components/WindflowLayout.vue'

createApp(App).mount('#app')

export default {
    components: {
        WindflowMagicToolbar: WindflowMagicToolbar,
        WindflowApp: WindflowApp,
        WindflowArea: WindflowArea,
        WindflowLayout: WindflowLayout,
    }
}
