import React, { useState, useEffect } from "react";

import MealItem from "../MealItem/MealItem";
import Card from "../../UI/Card/Card";

import styles from "./AvailableMeals.module.css";

// const DATA = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Ponmo",
//     description: "A Nigerian speciality",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 22.45,
//   },
//   {
//     id: "m4",
//     name: "Nigerian Jollof Rice",
//     description: "The best food in West Africa",
//     price: 25.55,
//   },
// ];

const AvailableMeals = (props) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mealsData, setMealsData] = useState([]);

  useEffect(() => {
    const fetcMealsHandler = async () => {
      try {
        setError(false);
        setIsLoading(true);

        const response = await fetch("http://localhost:8080/meals/fetch/meal");

        if (!response.ok) {
          throw Error("Sorry Something Happened. Try Again Later");
        }

        const { meals } = await response.json();
        setMealsData(meals);
      } catch (err) {
        setError(err.message);
        console.log(err);
      }
      setIsLoading(false);
    };

    fetcMealsHandler();
  }, []);

  if (isLoading) {
    return (
      <section className={styles.loading}>
        <p>Loading Meals.....</p>
      </section>
    );
  }

  if (!isLoading && error) {
    return (
      <section className={styles.error}>
        <p>Failed To Fetch Meals</p>
      </section>
    );
  }

  const mealItem = mealsData.map((meals) => (
    <MealItem
      id={meals._id}
      key={meals._id}
      name={meals.name}
      description={meals.description}
      price={meals.price}
    />
  ));

  return (
    <section className={styles["cart--items"]}>
      <Card>
        <ul>{mealItem}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
