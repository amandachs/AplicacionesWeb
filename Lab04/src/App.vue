<script setup lang="ts">
import SideNav from './components/SideNav.vue'
import { RouterView } from 'vue-router'
</script>

<template>

  <SideNav />
  <div class="container-fluid p-0">
    <RouterView />
  </div>
  
</template>