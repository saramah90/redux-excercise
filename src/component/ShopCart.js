import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Cart from './shared/Cart.js';

import { Link } from 'react-router-dom';
import styles from "./ShopCart.module.css";
import {clear, checkout} from "../redux/cart/cartAction";

const ShopCart = () => {
    
   ;
    const dispatch = useDispatch();
    const state = useSelector(state => state.cartState)
    return (
        <div className={styles.container}>
            <div  className={styles.cartContainer}>
            {state.selectedItems.map(item => <Cart key={item.id} data={item}/>)}
            </div>
          
              {
              state.itemsCounter > 0 && <div  className={styles.payments}>
                <p><span>totalItems:</span>{state.itemsCounter}</p>
                <p><span>total Payments:</span>{state.total}</p>    
                <div  className={styles.buttonContainer}>
                
                        <button  className={styles.clear} onClick={()=> dispatch(clear)}>CLEAR</button>
                        <button  className={styles.checkout} onClick={()=> dispatch(checkout)}>CHECKOUT</button>
                        </div>
                 </div>
              }
                {
                    state.checkout && <div className={styles.complete}> 
                    <h3> checkout successfully </h3>
                    <Link to="/products"> buy more</Link>
                    </div>
                }
                <div className={styles.border}> 
                {
                    !state.checkout &&  state.itemsCounter === 0 && <div className={styles.complete}>
                    <h3> buy again </h3>
                    

                    <Link to="/products" className={styles.link}> go to shop</Link>
                    </div>
                }
                </div>
           
        </div>
    );
};

export default ShopCart;