<!-- A navigation button that emits the nav [props.value] and the top position
    of the button onClick 
-->
<template>
    <button ref="buttonRef" @click="handleButtonClick" class="relative">
        <slot />
        <Badge v-if="props.badgeValue" :value="props.badgeValue" class="absolute top-0 right-1" />
    </button>
</template>

<script setup lang="ts">
    import { PropType, ref } from "vue";
    import NavType from "./types";
    import Badge from "./Badge.vue";

    const buttonRef = ref<any>();
    const props = defineProps({ 
        value: {
            type: String as PropType<NavType>,
            required: true,
        },
        badgeValue: {
            type: Number,
            required: false,
        }
    });    
    const emit = defineEmits(['onClick']);

    function handleButtonClick() {
        const top = buttonRef.value?.getBoundingClientRect().top;
        emit('onClick', props.value, top);
    }
</script>
