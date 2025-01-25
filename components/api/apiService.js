const axios = require('axios');

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

exports.fetchCategory = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/list.php?c=list`);
    return response.data.meals;
  } catch (error) {
    throw new Error('Failed to fetch categories from TheMealDB');
  }
};

exports.fetchMealsByCategory = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
    return response.data.meals;
  } catch (error) {
    throw new Error('Failed to fetch meals by category');
  }
};

exports.fetchMealDetailsById = async (mealId) => {
  try {
    const response = await axios.get(`${BASE_URL}/lookup.php?i=${mealId}`);
    return response.data.meals[0];
  } catch (error) {
    throw new Error('Failed to fetch meal details');
  }
};

exports.fetchMealsByName = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}/search.php?s=${name}`);
    return response.data.meals;
  } catch (error) {
    throw new Error('Failed to fetch meals by name');
  }
};

exports.fetchRandomMeal = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/random.php`);
    return response.data.meals[0]; // Devuelve solo una comida
  } catch (error) {
    throw new Error('Failed to fetch random meal');
  }
};

