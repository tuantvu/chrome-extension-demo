<template>
    <button @click="handleButtonClick">
        <slot />
    </button>
</template>

<script setup lang="ts">
    import { PropType } from "vue";
import { NavType} from "./types";

    const props = defineProps({ value: {
        type: Object as PropType<NavType>,
        required: true
    }});    
    const emit = defineEmits(['onClick']);

    function handleButtonClick() {
        emit('onClick', props.value);
    }
</script>
