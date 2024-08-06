import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_CART") {
    const updatedTotalAmount =
      state.totalAmount + action.items.price * action.items.amount;

    const existingCartItemsIndex = state.items.findIndex(
      (item) => item.id === action.items.id
    );
    const existingCartItems = state.items[existingCartItemsIndex];

    let updatedItems;
    if (existingCartItems) {
      const updatedItem = {
        ...existingCartItems,
        amount: existingCartItems.amount + action.items.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemsIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.items);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_CART") {
    const existingCartItemsIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItems = state.items[existingCartItemsIndex];

    const updatedTotalAmount = state.totalAmount - existingCartItems.price;

    let updatedItems;
    if (existingCartItems.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItems,
        amount: existingCartItems.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemsIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
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
