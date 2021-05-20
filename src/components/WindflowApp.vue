<template>
    <p>I am a windflow application</p>
    <slot/>
</template>

<script lang="ts">
    import {defineComponent} from "vue";

    export default defineComponent({
        name: "WindflowApp"
    })
</script>
