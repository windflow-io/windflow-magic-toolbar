<template>
    <slot/>
</template>

<script lang="ts">
    import {defineComponent} from "vue";

    export default defineComponent({
        name: "WindflowApplication",
        data() {
            return {
                pageData: {
                    title: 'Hello World',
                    components:[
                        {
                            name:'Hero',
                            url:'/stubs/components/hero.vue',
                            order: 2
                        },
                        {
                            name:'Navbar',
                            url:'/stubs/components/navbar.vue'
                        }
                    ]
                }
            }
        },
        provide() {
            return {
                pageData:this.pageData
            }
        },
        mounted() {
            document.title = this.pageData.title;
        }
    })
</script>
