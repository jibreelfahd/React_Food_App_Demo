import { Schema, model } from "mongoose";

const mealsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const MealsProduct = model("meals", mealsSchema);
export default MealsProduct;
