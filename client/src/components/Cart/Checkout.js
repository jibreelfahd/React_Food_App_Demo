import { useRef, useState } from "react";
import styles from "./Checkout.module.css";

// @desc: helper form functions
const isEmpty = (value) => value.trim() === "";
const isNotSixChars = (value) => value.trim().length !== 6;

const Checkout = ({ onConfirm }) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = !isNotSixChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredName && enteredStreet && enteredPostalCode && enteredCity;

    if (!formIsValid) {
      return;
    }

    onConfirm({
      customerName: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
  };

  const nameInputClasses = `${styles["form-inputs"]} ${
    !formValidity.name ? styles.invalid : ""
  }`;
  const streetInputClasses = `${styles["form-inputs"]} ${
    !formValidity.street ? styles.invalid : ""
  }`;
  const postalCodeInputClasses = `${styles["form-inputs"]} ${
    !formValidity.postalCode ? styles.invalid : ""
  }`;
  const cityInputClasses = `${styles["form-inputs"]} ${
    !formValidity.city ? styles.invalid : ""
  }`;

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValidity.name && <p>Please enter valid name</p>}
      </div>
      <div className={streetInputClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formValidity.street && <p>Please enter valid street</p>}
      </div>
      <div className={postalCodeInputClasses}>
        <label htmlFor="name">Postal Code</label>
        <input type="number" id="postalCode" ref={postalCodeInputRef} />
        {!formValidity.postalCode && <p>Please enter valid postal code</p>}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formValidity.city && <p>Please enter valid city</p>}
      </div>
      <div className={styles.actions}>
        <button className={styles["btn__close"]}>Close</button>
        <button className={styles["btn__confirm"]}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
