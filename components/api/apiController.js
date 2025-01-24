const { fetchMealDetailsById, fetchMealsByCategory } = require('./apiService');

exports.getMealsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const meals = await fetchMealsByCategory(category);
    res.status(200).json({ data: meals });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMealDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const mealDetails = await fetchMealDetailsById(id);
    res.status(200).json({ data: mealDetails });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};