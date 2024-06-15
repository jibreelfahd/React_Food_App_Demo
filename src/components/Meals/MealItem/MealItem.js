import React from "react";

import MealForm from "../MealForm/MealForm";
import styles from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <li className={styles.cart}>
      <div>
        <h3>Sushi</h3>
        <div className={styles['cart--description']}>Finest fishes and veggies</div>
        <div className={styles['cart--price']}>$22.45</div>
      </div>
      <div>
        <MealForm />
      </div>
    </li>
  );
};

export default MealItem;
