import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Basket from './Components/basket';


function App() {
  return (
    <div className="App">
    <Header></Header>
    <div>
      <Main></Main>
      <Basket></Basket>
    </div>
    </div>

  );
}

export default App;
