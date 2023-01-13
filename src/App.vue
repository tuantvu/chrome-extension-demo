<template>
  <div class="flex row justify-end">
    <div :style="{'margin-top': topOffset + 'px'}">
      <ContentSwitcher :nav-type="navType" />
    </div>
    <NavMenu @show="handleShow" @show-profile="handleShowProfile" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import ContentSwitcher from './components/content/ContentSwitcher.vue';
  import NavMenu from './components/nav/NavMenu.vue';
  import NavType from './components/nav/types';

  const navType = ref<NavType>();
  const topOffset = ref<number>(10);

  // Sets the value of refs to pass to Content Switcher
  function handleShow(nav: NavType, top: number) {
    navType.value = nav;
    topOffset.value = top;
  }

  // Opens a new chrome tab to show profile
  function handleShowProfile() {
    chrome.tabs.create({url:"https://www.thymecare.com"});
  }
</script>
