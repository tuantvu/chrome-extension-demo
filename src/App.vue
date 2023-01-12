<template>
  <div class="flex row max-w-xl no-scrollbar">
    <div :style="{'margin-top': topOffset + 'px'}">
      <ContentSwitcher :nav-type="navType" />
    </div>
    <NavMenu @show="handleShow" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import ContentSwitcher from './components/content/ContentSwitcher.vue';
  import NavMenu from './components/nav/NavMenu.vue';
  import { NavType } from './components/nav/types';

  const navType = ref<NavType>();
  const topOffset = ref<number>(10);

  function handleShow(nav: NavType, top: number) {
    navType.value = nav;
    topOffset.value = top;
  }
</script>
