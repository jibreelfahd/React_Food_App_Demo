import React, { useState, useContext } from "react";

import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";
import styles from "./Cart.module.css";

const Cart = ({ onHide }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSbmit, setHasSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const addItemHandler = (item) => {
    cartCtx.addItems({ ...item, amount: 1 });
  };
  const removeItemHandler = (id) => {
    cartCtx.deleteItems(id);
  };

  const checkoutHandler = (event) => {
    event.preventDefault();

    setIsCheckout(true);
  };

  const submitCartHandler = async ({
    customerName,
    street,
    postalCode,
    city,
  }) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:8080/meals/order/meal", {
        method: "POST",
        body: JSON.stringify({
          items: cartCtx.items,
          customerName,
          street,
          postalCode,
          city,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Sorry something happened. Please Try Again Later");
      }

      const data = await response.json();
      console.log(data);

      setIsSubmitting(false);
      setHasSubmit(true);
    } catch (err) {
      console.log(err);
    }
  };

  const listItems = cartCtx.items.map((meals) => (
    <li key={meals.id} className={styles["list-items"]}>
      <div>
        <h3>{meals.name}</h3>
        <span className={styles.list__price}>${meals.price.toFixed(2)}</span>
        <span className={styles.list__amount}>x {meals.amount}</span>
      </div>
      <div className={styles["list--control"]}>
        <button onClick={removeItemHandler.bind(null, meals.id)}>–</button>
        <button onClick={addItemHandler.bind(null, meals)}>+</button>
      </div>
    </li>
  ));

  const modalActions = (
    <>
      <div className={styles.actions}>
        <button className={styles.close} onClick={onHide}>
          Close
        </button>
        {cartCtx.items.length > 0 ? (
          <button className={styles.order} onClick={checkoutHandler}>
            Order
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );

  const submittingCartModal = <p>Submitting order, wait a moment...</p>;

  const hasSubmitOrderModal = (
    <>
      <p>Order Recieved, you will be contacted shortly</p>
      <div className={styles.actions}>
        <button className={styles.close} onClick={onHide}>
          Close
        </button>
      </div>
    </>
  );

  const cartModal = (
    <>
      <ul className={styles.list}>{listItems}</ul>
      <div className={styles.control}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {!isCheckout && modalActions}
      {isCheckout && <Checkout onConfirm={submitCartHandler} />}
    </>
  );

  return (
    <Modal onHideCart={onHide}>
      {!isSubmitting && !hasSbmit && cartModal}
      {isSubmitting && submittingCartModal}
      {hasSbmit && hasSubmitOrderModal}
    </Modal>
  );
};

export default Cart;
