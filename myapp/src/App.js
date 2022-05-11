import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Basket from './Components/basket';
import Data from "./Data";


function App() {
  const { products } = Data;
  return (
    <div className="App">
    <Header></Header>
    <div className='row'>
      <Main products= {products}></Main>
      <Basket></Basket>
    </div>
    </div>

  );
}

export default App;
