<template>
  <div class="flex row w-[360px]">
    <ContentSwitcher :nav-type="navType" />
    <NavMenu @show="handleShow" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
import ContentSwitcher from './components/content/ContentSwitcher.vue';
  import NavMenu from './components/nav/NavMenu.vue';
import { NavType } from './components/nav/types';

  const navType = ref<NavType>();

  function handleShow(nav: NavType) {
    navType.value = nav;
  }
</script>
