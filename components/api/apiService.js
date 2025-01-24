
const axios = require('axios');

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

exports.fetchMealsByCategory = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
    return response.data.meals;
  } catch (error) {
    console.error('Error fetching meals by category:', error.message);
    throw new Error('Failed to fetch meals from TheMealDB');
  }
};

exports.fetchMealDetailsById = async (mealId) => {
  try {
    const response = await axios.get(`${BASE_URL}/lookup.php?i=${mealId}`);
    return response.data.meals[0];
  } catch (error) {
    console.error('Error fetching meal details:', error.message);
    throw new Error('Failed to fetch meal details from TheMealDB');
  }
};