<script lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

interface Recipe {
  idMeal: string;
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
  [key: string]: any;
}

export default {
  setup() {
    const route = useRoute();
    const recipe = ref<Recipe | null>(null);

    // Fetch recipe details by ID
    const fetchRecipeDetails = async (id: string) => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        recipe.value = response.data.meals[0];
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    // Process ingredients and measurements into an array
    const ingredients = computed(() => {
      if (!recipe.value) return [];
      const result = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = recipe.value[`strIngredient${i}`];
        const measure = recipe.value[`strMeasure${i}`];
        if (ingredient) {
          result.push({ ingredient, measure });
        }
      }
      return result;
    });

    onMounted(() => {
      if (route.params.id) {
        fetchRecipeDetails(route.params.id as string);
      }
    });

    return { recipe, ingredients };
  },
};
</script>

<template>
  <div v-if="recipe">
    <h1>{{ recipe.strMeal }}</h1>
    <img :src="recipe.strMealThumb" :alt="recipe.strMeal" />
    <h2>Ingredients</h2>
    <ul>
      <li v-for="item in ingredients" :key="item.ingredient">
        {{ item.ingredient }} - {{ item.measure }}
      </li>
    </ul>
    <h2>Instructions</h2>
    <p>{{ recipe.strInstructions }}</p>
  </div>
  <div v-else>
    <p>Laddar recept...</p>
  </div>
</template>