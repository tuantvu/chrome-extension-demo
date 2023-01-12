<template>
    <div class="flex flex-col h-min items-center w-16 p-4 gap-y-4 bg-t-purple600 border-none outline-none shadow-md shadow-gray-400 rounded">
        <div><SvgLogoLetterMark /></div>
        <NavButton value="notifications" @onClick="handleClick"><SvgBell /></NavButton>
        <NavButton value="playbooks" @onClick="handleClick"><SvgMap /></NavButton>
        <NavButton value="timeline" @onClick="handleClick"><SvgCalendarDays /></NavButton>
        <NavButton value="profile" @onClick="handleClick"><SvgClipBoard /></NavButton>
    </div>
</template>

<script setup lang="ts">
    import SvgLogoLetterMark from "../svg/SvgLogoLetterMark.vue";
    import SvgBell from "../svg/SvgBell.vue";
    import SvgCalendarDays from "../svg/SvgCalendarDays.vue";
    import SvgClipBoard from "../svg/SvgClipBoard.vue";
    import SvgMap from "../svg/SvgMap.vue";
    import NavButton from "./NavButton.vue";
    import { NavType } from "./types";

    const emit = defineEmits(['show']);

    function handleClick(value: NavType, topOffset: number) {
       emit("show", value, topOffset);
    }

</script>
