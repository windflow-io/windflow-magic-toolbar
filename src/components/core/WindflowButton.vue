<template>
    <div class="relative flex flex-col items-center justify-center py-1 w-7 mr-1 rounded" :class="selected || 'hover:bg-gray-200'">
        <button class="flex flex-col" v-if="action"><slot/></button>
        <div class="flex flex-col" v-else><slot/></div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "WindflowButton",
    props: [
        'tooltip',
        'action',
        'selected'
    ]
});
</script>
