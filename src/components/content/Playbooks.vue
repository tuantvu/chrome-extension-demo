<template>
    <ContentWrapper header="Thyme Care Support Playbooks">
        <div v-for="item in playbookItems" class="border rounded p-4">
            <div class="text-sm font-bold">{{ item.title }}</div>
            <div class="text-xs mt-1">{{ item.content }}</div>
            <div class="flex justify-between text-sm text-t-neutrals500 mt-2">
                <span>
                {{ item.taskComplete }}/{{ item.totalTasks }}
                </span>
                {{ getTaskCompletePercentage(item) }}%
            </div>
            <div class="z-10 w-full h-[3px] rounded-lg bg-t-neutrals300">
                <div :style="{width: getTaskCompletePercentage(item) + '%'}" class="h-[3px] rounded-lg bg-t-green600" />
            </div>
        </div>
    </ContentWrapper>
</template>

<script setup lang="ts">
    import Playbook from "../../models/playbook";
    import ContentWrapper from "./ContentWrapper.vue";

    const playbookItems: Playbook[] = [
        {
            id: "1",
            title: "ED High Utilizer",
            content: "Supporting members who use the emergency room frequently for preventable reasons by identifying root causes and developing an action plan to address them.",
            totalTasks: 7,
            taskComplete: 4,
        },
        {
            id: "2",
            title: "Transportation Assistance",
            content: "Identifying transportation barriers and developing an access plan to ensure appropriate transportation access.",
            totalTasks: 15,
            taskComplete: 5,
        },
        // { // Hiding due to scrollbar
        //     id: "3",
        //     title: "Advanced Care Planning",
        //     content: "Discussing and formalizing an advanced care plan to support goal-concordant care.",
        //     totalTasks: 10,
        //     taskComplete: 5,
        // }
    ]

    function getTaskCompletePercentage(item: Playbook){
        return Math.trunc(item.taskComplete / item.totalTasks * 100);
    }
</script>
