import express from 'express';
const router = express.Router();

import { getMeals } from '../../controllers/Meals/mealsController.js';

router.get('/fetch/meal', getMeals);

export default router;