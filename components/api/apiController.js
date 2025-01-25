const { esUndefined } = require('../utils/validator');
const { fetchMealDetailsById, fetchMealsByCategory, fetchCategory, fetchMealsByName, fetchRandomMeal } = require('./apiService');

exports.getCategory = async (req, res) => {
  try {
    const categories = await fetchCategory();
    res.status(200).json({ data: categories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMealsByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    if (esUndefined(category)) {
      return res.status(400).json({ error: 'Category is required' });
    }

    const meals = await fetchMealsByCategory(category);
    res.status(200).json({ data: meals });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMealDetails = async (req, res) => {
  try {
    const { id } = req.params;

    if (esUndefined(id)) {
      return res.status(400).json({ error: 'Meal is required' });
    }

    const mealDetails = await fetchMealDetailsById(id);
    res.status(200).json({ data: mealDetails });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMealsByName = async (req, res) => {
  try {
    const { name } = req.params;

    if (esUndefined(name)) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const meals = await fetchMealsByName(name);
    res.status(200).json({ data: meals });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRandomMeal = async (req, res) => {
  try {
    const randomMeal = await fetchRandomMeal();
    res.status(200).json({ data: randomMeal });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};