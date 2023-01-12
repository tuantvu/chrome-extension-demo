<template>
    <ContentWrapper header="Thymeline: Member Touchpoints">
        <ul>
            <li v-for="item in touchpointItems">
                <div class="flex items-center h-full">
                    <div class="z-10 mx-5 w-1 bg-t-neutrals200 h-[65px] flex justify-center items-center">
                        <TimelineIcon :item="item" />
                    </div>
                    <div>
                        <div class="text-[9px] text-t-neutrals500 font-medium">{{ item.date }}</div>
                        <div :class="`text-sm ${item.alert ?'text-t-orange': 'text-black'} font-extrabold`">{{ item.title }}</div>
                        <div class="text-[10px] text-t-neutrals700">{{ item.location }}</div>
                    </div>
                    
                </div>
                <div class="z-10 mx-5 w-1 bg-t-neutrals200 h-1 flex justify-center items-center"></div>
            </li>
        </ul>
    </ContentWrapper>
</template>

<script setup lang="ts">
    import ContentWrapper from './ContentWrapper.vue';
    import Touchpoint from "../../models/touchpoint";
    import SvgAssignment from '../svg/SvgAssignment.vue';
    import TimelineIcon from './TimelineIcon.vue';

    const touchpointItems: Touchpoint[] = [
        {
            id: "1",
            title: "ED Visit",
            location: "Central Memorial Hospital",
            date: "Oct 26, 2022",
            type: "assignment",
            alert: true,
        },
        {
            id: "2",
            title: "Nurse Call: Care Plan",
            location: "Susie Ulloa, Thyme Care",
            date: "Oct 20, 2022",
            type: "call",
        },
        {
            id: "3",
            title: "Visit with Internal Medicine",
            location: "Richard Donaldson, Donaldson Family Medicine and Wellness",
            date: "Oct 17, 2022",
            type: "assignment",
        },
        {
            id: "4",
            title: "CT Scan",
            location: "Central Memorial Hospital",
            date: "Sep 30, 2022",
            type: "test",
        },
    ]
</script>
