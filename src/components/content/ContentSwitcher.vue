<template>
    <div class="w-[360px]" v-if="props.navType === 'playbooks'">
        <Playbooks />
    </div>
    <div class="w-[320px]" v-if="props.navType === 'notifications'">
        <Notifications />
    </div>
</template>

<script setup lang="ts">
    import { PropType } from 'vue';
    import { NavType } from '../nav/types';
    import Notifications from './Notifications.vue';
    import Playbooks from "./Playbooks.vue";

    const props = defineProps({navType: {
        type: String as PropType<NavType> | undefined,
    }})
</script>
