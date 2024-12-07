<script lang="ts">
import { ref, Ref, computed, onMounted, inject } from 'vue';
import { fetchFoodData } from '../services/foodService';

interface Meal {
  idMeal: string;
  strMeal: string;
  [key: string]: any;
}

export default {
  setup() {
    const foodItems = ref<Meal[]>([]);
    const searchQuery = ref('');
    const favorites = inject('favorites') as Ref<Meal[]>;

    const filteredItems = computed(() =>
      foodItems.value.filter((food) =>
        food.strMeal.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    );

    onMounted(async () => {
      try {
        foodItems.value = await fetchFoodData();
      } catch (error) {
        console.error('Error fetching food data:', error);
      }
    });

    const addToFavorites = (meal: Meal) => {
      if (!favorites.value.some((fav) => fav.idMeal === meal.idMeal)) {
        favorites.value.push(meal);
      }
    };

    return { foodItems, searchQuery, filteredItems, addToFavorites };
  },
};
</script>

<template>
  <div>
    <h1>Recept</h1>
    <input v-model="searchQuery" placeholder="Sök recept..." />
    <div class="recipes">
      <div class="recipe" v-for="food in filteredItems" :key="food.idMeal">
        <router-link :to="`/recipe/${food.idMeal}`">
          <img :src="food.strMealThumb" alt="Meal Image" class="recipe-image"/>
          <p>{{ food.strMeal }}</p>
        </router-link>
        <button @click="addToFavorites(food)">Lägg till i favoriter</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.recipes {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.recipe {
  width: 200px;
  text-align: center;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
}

.recipe img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
