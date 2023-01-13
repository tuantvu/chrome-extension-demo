<template>
    <div :class="`absolute w-7 h-7 rounded-full flex justify-center items-center ${color}`">
        <component :is="svg" />
    </div>
</template>

<script setup lang="ts">
    import TouchPoint from '../../models/touchpoint';
    import { computed, defineAsyncComponent, PropType } from 'vue';

    const props = defineProps({item: {
        type: Object as PropType<TouchPoint>,
        required: true,
    }});

    const color = computed(()  => {
        if (props.item.alert) {
            return "bg-t-orange";
        }
        switch (props.item.type) {
            case "assignment":
                return "bg-t-blue600";
            case "call":
                return "bg-t-purple600";
            case "test":
                return "bg-t-green600";
        }
    })

    const svg = computed(() => defineAsyncComponent(() => {
        switch (props.item.type) {
            case "assignment":
                return import('../svg/SvgAssignment.vue');
            case "call":
                return import('../svg/SvgCall.vue');
            case "test":
                return import('../svg/SvgCircle.vue');
        }
    }))


</script>

<style scoped>

</style>