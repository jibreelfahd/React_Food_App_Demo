import React from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import AvailableMeals from "./components/Meals/AvailableMeals/AvailableMeals";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Meals />
        <AvailableMeals />
      </main>
    </>
  );
};

export default App;
