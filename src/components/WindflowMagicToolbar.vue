<template>
    <div ref="windflowMagicToolbar" class="absolute bg-gray-100 rounded-md shadow-md flex flex-col items-center justify-center text-gray-600 text-lg py-2" :style="{left:positionX + 'px', top:positionY + 'px'}">
        <div class="flex flex-row">
            <windflow-button class="cursor-move ml-1" @mousedown="dragDown($event)">
                <grip-vertical-icon/>
            </windflow-button>

            <div class="w-0 mr-1 border-r py-2 border-gray-300"></div>

            <windflow-button @mouseover="statusbarText = 'Add component to page'" @mouseout="statusbarText = ''">
                <plus-icon/>
            </windflow-button>

            <windflow-button @mouseover="statusbarText = 'Edit component content'" @mouseout="statusbarText = ''">
                <edit-icon/>
            </windflow-button>

            <windflow-button @mouseover="statusbarText = 'Edit component code'" @mouseout="statusbarText = ''">
                <code-icon/>
            </windflow-button>

            <windflow-button @mouseover="statusbarText = 'Switch component colours'" @mouseout="statusbarText = ''">
                <palette-icon/>
            </windflow-button>

            <windflow-button @mouseover="statusbarText = 'Remove component from page (does not delete)'" @mouseout="statusbarText = ''">
                <trash-icon/>
            </windflow-button>

            <windflow-button @mouseover="statusbarText = 'Save all'" @mouseout="statusbarText = ''">
                <save-icon/>
            </windflow-button>

            <windflow-button @mouseover="statusbarText = 'Publish page'" @mouseout="statusbarText = ''">
                <upload-icon/>
            </windflow-button>

            <windflow-button @mouseover="statusbarText = 'Close'" @mouseout="statusbarText = ''">
                <times-icon/>
            </windflow-button>
        </div>
        <div class="flex pl-2 w-full items-start text-xs items-center transform ease-linear duration-200" :class="statusbarText ? 'pt-1 h-4':'h-0'"><span>{{statusbarText}} <!--<edit-icon/>--></span></div>
    </div>
</template>

<script lang="ts">

    import PlusIcon from '/src/components/core/icons/PlusIcon.vue'
    import CodeIcon from '/src/components/core/icons/CodeIcon.vue'
    import EditIcon from '/src/components/core/icons/EditIcon.vue'
    import SaveIcon from '/src/components/core/icons/SaveIcon.vue'
    import TrashIcon from '/src/components/core/icons/TrashIcon.vue'
    import UploadIcon from '/src/components/core/icons/UploadIcon.vue'
    import TimesIcon from '/src/components/core/icons/TimesIcon.vue'
    import WindflowButton from '/src/components/core/WindflowButton.vue'
    import GripVerticalIcon from "/src/components/core/icons/GripVerticalIcon.vue";
    import PaletteIcon from "@/components/core/icons/PaletteIcon.vue";
    import {defineComponent} from "vue";

    export default defineComponent( {
        name: 'WindflowMagicToolbar',
        components: {
            PaletteIcon,
            GripVerticalIcon,
            CodeIcon, PlusIcon, EditIcon, SaveIcon, TrashIcon, UploadIcon, TimesIcon, WindflowButton,
        },
        data() {
            return {
                statusbarText: '',
                positionX:220,
                positionY:350,
                mouseOffsetX:0,
                mouseOffsetY:0,
            }
        },
        methods: {
            dragDown(e:MouseEvent) {
                this.mouseOffsetX = e.clientX - (this.$refs.windflowMagicToolbar as HTMLDivElement).getBoundingClientRect().x;
                this.mouseOffsetY = e.clientY - (this.$refs.windflowMagicToolbar as HTMLDivElement).getBoundingClientRect().y;
                window.addEventListener('mousemove', this.dragMove)
                window.addEventListener('mouseup',this.dragUp)
            },
            dragMove(e:MouseEvent) {
                this.positionX = e.clientX - this.mouseOffsetX;
                this.positionY = e.clientY - this.mouseOffsetY;
            },
            dragUp() {
                window.removeEventListener('mousemove', this.dragMove);
                window.removeEventListener('mouseup', this.dragUp);
            }
        }
    });

</script>
