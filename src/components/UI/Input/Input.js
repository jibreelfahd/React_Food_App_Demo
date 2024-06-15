import React from "react";

import styles from './Input.module.css';

const Input = ({ input, label}) => {
  return (
    <div className={styles['input--items']}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} id={input.id}/>
    </div>
  )
};

export default Input;