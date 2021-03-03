import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ScrollToTop from "react-scroll-to-top";

ReactDOM.render(
  <BrowserRouter>
  <ScrollToTop /> 
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);


