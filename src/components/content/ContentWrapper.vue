<template>
    <div class="flex flex-col p-4 gap-y-2 border-2 border-t-purple200 rounded">
        <div class="text-base font-bold">{{ props.header }}</div>
        <slot />
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        header: {type: String, required: true}
    })
</script>
