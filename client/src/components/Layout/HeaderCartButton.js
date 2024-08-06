import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ onShowCart }) => {
  const cartCtx = useContext(CartContext);
  const [isHighlighted, setIsHighlighted] = useState(false);

  const { items } = cartCtx;

  const classes = `${styles["cart--button"]} ${
    isHighlighted ? styles.bump : ""
  }`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsHighlighted(true);

    const timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const numberOfCartItems = items.reduce((curValue, items) => {
    return curValue + items.amount;
  }, 0);

  return (
    <button onClick={onShowCart} className={classes}>
      <span className={styles["cart__icon"]}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
