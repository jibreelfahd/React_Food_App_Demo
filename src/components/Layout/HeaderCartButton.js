import React from "react";

import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ onShowCart }) => {
  return (
    <button onClick={onShowCart} className={styles["cart--button"]}>
      <span className={styles["cart__icon"]}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
