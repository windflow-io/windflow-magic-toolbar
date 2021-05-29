<template>
    <windflow-application>
        <windflow-layout is="StackedLayout"/>
        <windflow-magic-toolbar/>
    </windflow-application>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, createApp} from 'vue'
import WindflowMagicToolbar from '@/components/WindflowMagicToolbar.vue'
import WindflowApplication from "@/components/WindflowApplication.vue";
import WindflowLayout from "@/components/WindflowLayout.vue";


export default defineComponent({
    name: 'App',
    components: {
        WindflowLayout,
        WindflowApplication,
        WindflowMagicToolbar,
    },
    mounted() {
        const stackedLayout = defineAsyncComponent(() => import('@/stubs/components/StackedLayout.vue'));
        const app = createApp(this)
        app.component('StackedLayout', stackedLayout);
    },

})
</script>
