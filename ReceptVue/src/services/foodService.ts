import axios from 'axios';

// Funktion för att hämta receptdata från TheMealDB API
export const fetchFoodData = async () => {
  try {
    // Anropa API:et och hämta alla måltider
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    return response.data.meals; // Returnera listan av måltider
  } catch (error) {
    console.error('Error fetching food data:', error);
    throw error; // Skicka vidare felet för hantering i anropande komponent
  }
};
