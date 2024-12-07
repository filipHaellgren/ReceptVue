<script lang="ts">
import { ref, provide } from 'vue';

export default {
  setup() {
    const favorites = ref([]); // Reactive array for favorites
    provide('favorites', favorites); // Provide it globally
  },
};
</script>
<template>
  <div>
    <nav>
      <router-link to="/">Recept</router-link> | 
      <router-link to="/favorites">Favoriter</router-link>
    </nav>
    <router-view />
  </div>
</template>