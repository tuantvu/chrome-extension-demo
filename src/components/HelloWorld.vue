<script setup lang="ts">
  import { ref } from 'vue';
  import TabMenu from 'primevue/tabmenu';

  const items = ref([
            {
                label: 'Home',
                icon: 'pi pi-fw pi-home',
                to: '/'
            },
            {
                label: 'Calendar',
                icon: 'pi pi-fw pi-calendar',
                to: '/calendar'
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                to: '/edit'
            },
            {
                label: 'Documentation',
                icon: 'pi pi-fw pi-file',
                to: '/documentation'
            },
            {
                label: 'Settings',
                icon: 'pi pi-fw pi-cog',
                to: '/settings'
            }
        ]);
</script>

<template>
  <div>
        <div class="card">
            <h5>Default</h5>
            <TabMenu :model="items" />
            <router-view/>
        </div>

        <!-- <div class="card">
            <h5>Programmatic</h5>
            <div class="py-2">
                <Button class="p-button-text" label="Activate 1st" @click="active = 0" />
                <Button class="p-button-text mr-2" label="Activate 2nd" @click="active = 1" />
                <Button class="p-button-text mr-2" label="Activate 3rd" @click="active = 2" />
            </div>

            <TabMenu v-model:activeIndex="active" :model="items2" />
        </div> -->
    </div>
</template>
