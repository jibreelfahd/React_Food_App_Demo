import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_CART') {
    console.log(action.items)
  }

  return defaultCartState;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  //function to add or remove items from cart
  const addItemsToCart = (item) => {
    dispatchCartAction({ type: "ADD_CART", items: item });
  };

  const deleteItemsFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE_CART", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItemsToCart,
    deleteItems: deleteItemsFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
