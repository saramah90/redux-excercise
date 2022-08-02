import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//components
import Product from "./shared/Product";

// redux
import { fetchProducts } from "../redux/products/productsAction";

import styles from "./Store.module.css";

const Store = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);

  useEffect(() => {
    if (!productsState.products.length) dispatch(fetchProducts())
},[])
  // prevent loading use if
  
  return (
    <div className={styles.container}>
      {productsState.loading ? (
        <h2>Loading...</h2>
      ) : productsState.error ? (
        <h2>Error</h2>
      ) : (
        productsState.products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      )}
    </div>
  );
};

export default Store;
