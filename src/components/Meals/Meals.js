import React from "react";

import MealsContent from "./MealsContent/MealsContent";
import AvailableMeals from "..//Meals/AvailableMeals/AvailableMeals";


const Meals = (props) => {
  return (
    <>
      <MealsContent />
      <AvailableMeals />
    </>
  );
};

export default Meals;
