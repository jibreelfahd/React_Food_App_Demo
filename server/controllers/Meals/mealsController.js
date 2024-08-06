import MealsProduct from '../../models/Meals/MealsProduct.js';

export const getMeals = async (req,res) => {
  try {
    const meals = await MealsProduct.find({});

    if (!meals) {
      res.status(404).json({ message: 'No Available Meals Foubd' });
    }

    return res.status(200).json({ meals });
  } catch (err) {
    console.log('Error from get all meals', err);
    return res.status(500).json({ error: err, message: 'Sorry something happened, Try Again Later' });
  }
};