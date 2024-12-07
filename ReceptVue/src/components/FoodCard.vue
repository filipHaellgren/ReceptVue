<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    food: {
      type: Object as PropType<{ id: number; Namn: string }>,
      required: true,
    },
  },
});
</script>

<template>
  <div>
    <h2>{{ food.Namn }}</h2>
  </div>
</template>
