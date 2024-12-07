import { createRouter, createWebHistory } from 'vue-router';
import FoodList from '../pages/FoodList.vue';
import Favorites from '../pages/Favorites.vue';
import RecipeDetails from '../pages/RecipeDetails.vue';

const routes = [
  { path: '/', component: FoodList },
  { path: '/favorites', component: Favorites },
  { path: '/recipe/:id', component: RecipeDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
