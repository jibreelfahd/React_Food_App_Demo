import express from 'express';
const router = express.Router();

import { createOrder } from '../../controllers/Order/orderController.js';

router.post('/order/meal', createOrder);

export default router;