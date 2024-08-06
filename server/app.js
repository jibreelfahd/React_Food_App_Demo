import express from 'express';
const app = express();

import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors('*'));

// desc: IMPORTS  
import connectDB from './db/index.js';
import mealsRouter from './routes/Meals/mealsRouter.js';
import orderRouter from './routes/Order/orderRouter.js';

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const start = async () => {
  try {
    await connectDB(MONGO_URI);
    console.log('Connected to database successfully');
    app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`))
  } catch (err) {
    console.log('Error from start server', err );
  }
};

start();

app.use('/meals', mealsRouter);
app.use('/meals', orderRouter);