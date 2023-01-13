<template>
    <div class="w-3 h-3 rounded-full bg-t-red600 flex justify-center items-center text-t-purple200 text-[8px] font-bold">
        {{ props.value }}
    </div>
</template>

<script setup lang="ts">
    import { defineProps } from 'vue';
    const props = defineProps({value: {type: Number, required: true}});
</script>