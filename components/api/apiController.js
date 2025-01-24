const { esUndefined } = require('../utils/validator');
const { fetchMealDetailsById, fetchMealsByCategory, fetchCategory } = require('./apiService');

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
