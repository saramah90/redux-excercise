import React from "react";
import { useSelector } from "react-redux/es/exports";

import { Link } from "react-router-dom";
import styles from "././Navbar.module.css";
import shopcart from "../../assessts/icons/shop.svg";
const Navbar = () => {

  const state = useSelector(state => state.cartState)
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link className={styles.productLink} to="/products">products</Link>
        <div  className={styles.iconContainer} >
            <Link to="/Cart">
            <img src={shopcart} alt="cart" />
            </Link>
          <span>{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
