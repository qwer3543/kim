<template>
  <div>
  <main class="main" id="top">
  <ModalPopUp />
    <div :class="isFluidMode ? 'container-fluid' : 'container'" data-layout="container">
      <NavView />
      <Content />
      <ModalView />
    </div>
  </main>
  <ThemeControlView />
  </div>
</template>

<script setup>
  import {onMounted, ref} from 'vue';
  import { RouterLink, RouterView } from 'vue-router';
  import {setFluid, isFluid} from './utils/fluidUtil.js';
  import NavView from './views/NavView.vue';
  import Content from './views/Content.vue';
  import ModalView from './views/ModalView.vue';
  import ThemeControlView from './views/ThemeControlView.vue';
  import ModalPopUp from './views/ModalPopUp.vue';
  const isFluidMode = ref(isFluid());
  onMounted(() => {
    setFluid(isFluidMode);
    
  });
</script>