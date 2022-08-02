import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
// function
import { shorten, isInCart ,quantityCount} from '../../helper/function';

import trash from "../../assessts/icons/trash.svg";

import styles from "./Product.module.css";
// action
import {removeItem, addItem, increase, decrease } from "../../redux/cart/cartAction"

// import { CartContext } from '../../Context/CartContextProvider';
const Product = ({productData}) => {
    // const {state ,dispatch} = useContext(CartContext);
    const dispatch = useDispatch();
    const state = useSelector(state => state.cartState)
    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt="pic"/>
            <h1>{shorten(productData.title)}</h1>
            <p>Price: {productData.price}$</p>
            <div className={styles.linkContainer}>
            <Link to={`/products/${productData.id}`}>detaile</Link>
            <div className={styles.buttonContainer}>
                
                
                    {quantityCount(state, productData.id) > 1 && <button className={styles.smallButton} onClick={()=>dispatch(decrease(productData))}>-</button>}

                   {quantityCount(state, productData.id) === 1 && <button className={styles.smallButton} onClick={()=>dispatch(removeItem(productData))}><img src={trash} alt="trash"  style={{width:"10px"}}/></button>}
                   {quantityCount(state, productData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productData.id)}</span> }
                   
                {
                    isInCart(state, productData.id) ?
                    <button  className={styles.smallButton} onClick={()=> dispatch(increase(productData))}>+</button>
                    : <button onClick={()=> dispatch(addItem(productData))}>add to Cart</button>
                }  
                </div>
            
            </div>
        </div>
    );
};

export default Product;

 