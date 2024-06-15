import React from "react";

import styles from "./MealsContent.module.css";

const MealsContent = (props) => {
  return (
    <section className={styles.content}>
      <h2>Delicious Food, Delivered To Your</h2>
      <div>
        <p>
          Choose your favourite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </section>
  );
};

export default MealsContent;
