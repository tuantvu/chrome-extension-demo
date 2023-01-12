<template>
    <ContentWrapper header="Notifications from Thyme Care">
        <ul class="list-disc ml-6 flex flex-col gap-y-2">
            <li v-for="item in notificationItems" class="list-item">
                <div class="text-sm font-medium">{{ item.title }}</div>
                <div class="text-[10px] text-t-neutrals600">
                    <span>from </span>
                    <span class="text-t-purple600 underline">{{ item.playbookUrl }}</span>
                </div>
                <div class="text-[10px] italic text-t-neutrals600">{{ item.status }}</div>
            </li>
        </ul>
    </ContentWrapper>
</template>

<script setup lang="ts">
    import ContentWrapper from './ContentWrapper.vue';
    import Notification from "../../models/notification";

    const notificationItems: Notification[] = [
        {
            id: "1",
            title: "Consider Hospice Referral",
            playbookUrl: "Hospice Education Playbook",
            status: "completed by Tresia Michael, RN on Tues, Dec 6, 4:18pm"
        },
        {
            id: "2",
            title: "Identified Symptom: Nausea, 9/10",
            playbookUrl: "Symptom ID Assessment",
            status: "completed by member on Mon, Dec 5, 2:14pm"
        },
    ]
</script>
