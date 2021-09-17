import React, { createContext, useState } from "react";
import Product from "../interfaces/Product";
import CartItem from "../interfaces/CartItem";

interface ValueType {
  items: null | CartItem[];
  addProduct: (product: Product, quantity: number) => void;
}

const CartContext = createContext<null | ValueType>(null);

const CartProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<null | CartItem[]>(null);

  const addProduct = (product: Product, quantity: number): void => {
    let newItems: CartItem[] = [];
    if (items) newItems = items;
    let newItem: CartItem = { ...product, quantity: quantity };
    newItems.push(newItem);
    setItems(newItems);
  };

  const value: ValueType = {
    items,
    addProduct,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartProvider, CartContext };
