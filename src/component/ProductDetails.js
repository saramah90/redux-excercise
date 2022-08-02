import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./ProductDetail.module.css";

import { useSelector } from "react-redux";



const ProductDetails = () => {

  const data = useSelector(state => state.productsState.products)
  const params = useParams();
  const id = params.id;
  const product = data[id - 1];
  const { image, title, price, category, description } = product;
  
   

  return (
    <>
   
        <div>
          <div className={styles.container}>
            <img className={styles.image} src={image} alt="pic" />
            <div className={styles.textContainer}>
              <h3>{title}</h3>
              <p className={styles.description}>{description}</p>
              <p className={styles.category}>
                <span>category:</span>
                {category}
              </p>

              <div className={styles.buttonContainer}>
                <span className={styles.price}>price:{price}$</span>
                <Link to="/products"> back to shop</Link>
              </div>
            </div>
          </div>
         
        </div>
      
    </>
  );
};

export default ProductDetails;
