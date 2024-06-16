import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItemsToCart: (item) => {},
  deleteItemsFromCart: (id) => {}
});

export default CartContext;