import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './themes/globalStyles';
import { BrowserRouter } from 'react-router-dom'; // wrap App with Router

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);
