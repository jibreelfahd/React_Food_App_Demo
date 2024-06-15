import React from "react";

import Input from "../../UI/Input/Input";
import styles from "./MealForm.module.css";

const MealForm = (props) => {
  return (
    <form className={styles["meal--form"]}>
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
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealForm;
