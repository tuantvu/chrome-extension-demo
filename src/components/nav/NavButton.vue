<template>
    <button ref="buttonRef" @click="handleButtonClick">
        <slot />
    </button>
</template>

<script setup lang="ts">
    import { PropType, ref } from "vue";
import { NavType} from "./types";
    const buttonRef = ref<HTMLElement>();
    const props = defineProps({ value: {
        type: String as PropType<NavType>,
        required: true
    }});    
    const emit = defineEmits(['onClick']);

    function handleButtonClick() {
        const top = buttonRef.value?.getBoundingClientRect().top;
        emit('onClick', props.value, top);
    }
</script>
