import React from 'react';
import ReactDOM from 'react-dom/client';
//Components
import App from './App';
//Pages
//Routers
import { BrowserRouter } from 'react-router-dom';
//Reduxs
import store from './Store';
import { Provider } from 'react-redux';
//Icons
//Styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);


