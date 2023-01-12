<template>
    <div class="w-[320px]" v-if="props.navType === 'playbooks'">
        <Playbooks />
    </div>
    <div class="w-[320px]" v-if="props.navType === 'notifications'">
        <Notifications />
    </div>
    <div class="w-[320px]" v-if="props.navType === 'timeline'">
        <Timeline />
    </div>
</template>

<script setup lang="ts">
    import { PropType } from 'vue';
    import { NavType } from '../nav/types';
    import Notifications from './Notifications.vue';
    import Playbooks from "./Playbooks.vue";
    import Timeline from './Timeline.vue';

    const props = defineProps({navType: {
        type: String as PropType<NavType> | undefined,
    }})
</script>
