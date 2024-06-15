import React from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import AvailableMeals from "./components/Meals/AvailableMeals/AvailableMeals";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Meals />
        <AvailableMeals />
      </main>
    </>
  );
};

export default App;
