import React, { useContext } from "react";

import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";

const Cart = ({ onHide }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const addItemHandler = (item) => {
    cartCtx.addItems({ ...item, amount: 1 });
  };
  const removeItemHandler = (id) => {
    cartCtx.deleteItems(id);
  };

  const listItems = cartCtx.items.map((meals) => (
    <li key={meals.id} className={styles["list-items"]}>
      <div>
        <h3>{meals.name}</h3>
        <span className={styles.list__price}>${meals.price}</span>
        <span className={styles.list__amount}>x {meals.amount}</span>
      </div>
      <div className={styles["list--control"]}>
        <button onClick={removeItemHandler.bind(null, meals.id)}>–</button>
        <button onClick={addItemHandler.bind(null, meals)}>+</button>
      </div>
    </li>
  ));

  return (
    <Modal onHideCart={onHide}>
      <ul className={styles.list}>{listItems}</ul>
      <div className={styles.control}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.close} onClick={onHide}>
          Close
        </button>
        <button className={styles.order}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
