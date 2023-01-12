<template>
    <div>
        <!-- <Playbooks /> -->
    </div>
</template>

<script setup lang="ts">
    import { PropType } from 'vue';
    import { NavType } from '../nav/types';
    import Playbooks from "./Playbooks.vue";

    const props = defineProps({navType: {
        type: Object as PropType<NavType> | undefined,
    }})
</script>
