import React from 'react';
import Main from '../Components/Main';
import Basket from '../Components/Basket';
import Data from "../Data";
import { useState } from "react";
import ButtonAppBar from '../Components/ButtonAppBar';


function LandingPage() {
  const { products } = Data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  return (
    <div className="App">
      <ButtonAppBar />
      {/* <div className='row'>
        <Main onAdd={onAdd} products={products} />
        <Basket onAdd={onAdd} cartItems={cartItems} />
      </div> */}
    </div>

  );
}

export default LandingPage;
