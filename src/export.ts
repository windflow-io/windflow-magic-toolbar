import { createApp } from 'vue'
import App from './App.vue'
import WindflowMagicToolbar from './components/WindflowMagicToolbar.vue'

createApp(App).mount('#app')

export default {
    components: {
        WindflowMagicToolbar: WindflowMagicToolbar
    }
}
