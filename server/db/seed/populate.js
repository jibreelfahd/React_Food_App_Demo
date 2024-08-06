import connectDB from "../index.js";
import MealsProduct from "../../models/Meals/MealsProduct.js";
import meals from './meals.json' assert { type: 'json' };

import dotenv from 'dotenv'
dotenv.config();

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await MealsProduct.deleteMany();
    await MealsProduct.create(meals);

    console.log('Seed Successful');
    process.exit(0)
  } catch (err) {
    console.log('Error from seed', err);
    process.exit(1)
  }
};

start();