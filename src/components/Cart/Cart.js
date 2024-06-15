import React from "react";

import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";

const LISTDATA = [
  {
    id: "g1",
    name: "Sushi",
    price: 22.99,
    amount: 4,
  },
  {
    id: "g2",
    name: "Sushi",
    price: 22.99,
    amount: 4,
  },
];

const listItems = LISTDATA.map((meals) => (
  <li key={meals.id} className={styles['list-items']}>
    <div>
      <h3>{meals.name}</h3>
      <span className={styles.list__price}>${meals.price}</span>
      <span className={styles.list__amount}>x {meals.amount}</span>
    </div>
    <div className={styles['list--control']}>
      <button>–</button>
      <button>+</button>
    </div>
  </li>
));

const Cart = (props) => {
  return (
    <Modal>
      {listItems}
      <div className={styles.control}>
        <span>Total Amount</span>
        <span>$99.99</span>
        </div>
      <div className={styles.actions}>
        <button>Order</button>
        <button>Close</button>
      </div>
    </Modal>
  );
};

export default Cart;
