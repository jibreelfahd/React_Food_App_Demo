import React from "react";

import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

import styles from "./Header.module.css";

const Header = ({ onShow }) => {
  return (
    <div>
      <div className={styles.header}>
        <h1>SuberbMeals</h1>
        <HeaderCartButton onShowCart={onShow }/>
      </div>
      <div className={styles.header__image}>
        <img src={mealsImage} alt="a table of meals" />
      </div>
    </div>
  );
};

export default Header;
