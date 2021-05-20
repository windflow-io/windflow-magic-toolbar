<template>
    <windflow-magic-toolbar/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WindflowMagicToolbar from './components/WindflowMagicToolbar.vue'

export default defineComponent({
    name: 'App',
    components: {
        WindflowMagicToolbar,
    }
})
</script>
