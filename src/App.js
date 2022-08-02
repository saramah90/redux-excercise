import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";

// redux (no contextprovider)
import store from "./redux/store";

// component
import Store from "./component/Store";
import ProductDetails from "./component/ProductDetails";
import Navbar from "./component/shared/Navbar";
import ShopCart from "./component/ShopCart";

function App() {
  return (
    
    <Provider store={store}>
              
        <Navbar />
        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
         
          <Route path="/products" element={<Store />} />
          <Route path="/Cart" element={<ShopCart />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </Provider>
    
    
  );
}

export default App;
