import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './Pages/LandingPage'
import reportWebVitals from './reportWebVitals';
import {DetailView}  from './Pages/DetailView';
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="details" element={<DetailView />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
