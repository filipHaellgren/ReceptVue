<script lang="ts">
import { inject, Ref } from 'vue';

interface Meal {
  idMeal: string;
  strMeal: string;
  [key: string]: any;
}

export default {
  setup() {
    const favorites = inject('favorites') as Ref<Meal[]>;
    return { favorites };
  },
};
</script>

<template>
  <div>
    <h1>Dina favoriter</h1>
    <ul>
      <li v-for="favorite in favorites" :key="favorite.idMeal">
        <router-link :to="`/recipe/${favorite.idMeal}`">{{ favorite.strMeal }}</router-link>
      </li>
    </ul>
  </div>
</template>
