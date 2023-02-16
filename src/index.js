import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import reportWebVitals from './reportWebVitals';
import ItemCategoryContainer from './components/itemCategoryContainer/ItemCategoryContainer';
import { CartProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Cart from './components/cart/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter >
        <NavBar />
        
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/item/:productoId' element={<ItemDetailContainer />} />
          <Route exact path="/category/:categoryIdParam" element={<ItemCategoryContainer/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
