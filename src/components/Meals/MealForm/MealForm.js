import React, { useState, useRef } from "react";

import Input from "../../UI/Input/Input";
import styles from "./MealForm.module.css";

const MealForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountValueRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const numberOfCartItems = amountValueRef.current.value;
    const enteredAmount = +numberOfCartItems;

    if (
      numberOfCartItems.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddAmount(enteredAmount);
  };

  return (
    <form className={styles["meal--form"]} onSubmit={submitHandler}>
      <Input
        input={{
          id: "amount",
          type: "number",
          max: "5",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
        label="Amount"
        ref={amountValueRef}
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Sorry please enter a valid price amount</p>}
    </form>
  );
};

export default MealForm;
