<template>
    <component :is="is"/>
</template>

<script lang="ts">
    import {defineComponent} from "vue";
    import StackedLayout from '@/stubs/components/StackedLayout.vue'

    export default defineComponent({
        name: "WindflowLayout",
        components: {StackedLayout},
        props: ['is']
    })
</script>
