import React from "react";
import Main from "../Components/Main";
import Basket from "../Components/Basket";
import Data from "../Data";
import { useState } from "react";
import ButtonAppBar from "../Components/ButtonAppBar";

function LandingPage() {
  const { products } = Data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const existingItem = cartItems.find((x) => x.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...existingItem, qty: existingItem.qty + 1 } : x
        )
      );
      console.log(cartItems)
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <ButtonAppBar />
      <div className="row">
        <Main onAdd={onAdd} products={products} />
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default LandingPage;
