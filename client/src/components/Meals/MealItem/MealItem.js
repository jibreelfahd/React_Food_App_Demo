import React, { useContext } from "react";

import MealForm from "../MealForm/MealForm";
import CartContext from "../../../store/cart-context";
import styles from "./MealItem.module.css";

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const prices = `$${price.toFixed(2)}`;

  const addCartItemHandler = (amount) => {
    cartCtx.addItems({
      id: id,
      name: name,
      price: price,
      amount: amount,
    });
  };

  return (
    <li className={styles.cart}>
      <div>
        <h3>{name}</h3>
        <div className={styles["cart--description"]}>{description}</div>
        <div className={styles["cart--price"]}>{prices}</div>
      </div>
      <div>
        <MealForm onAddAmount={addCartItemHandler} />
      </div>
    </li>
  );
};

export default MealItem;
