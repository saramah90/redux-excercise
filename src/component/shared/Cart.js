import React from 'react';
import {shorten} from "../../helper/function";
import trashIcon from "../../assessts/icons/trash.svg"

import styles from "./Cart.module.css";
import { useDispatch } from 'react-redux';
import {decrease , removeItem, increase} from "../../redux/cart/cartAction";
const Cart = (props) => {

const {image, title, quantity, price} = props.data;


const dispatch = useDispatch();
    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt = "pic"/>
            <div className={styles.data}>

                <h3>{shorten(title)}</h3>
                <p>{price}$</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ?
                    <button onClick={()=> dispatch(decrease(props.data))}>-</button> :
                    <button onClick={()=> dispatch(removeItem(props.data))}><img src={trashIcon} alt = "trash" style={{width:"10px"}} /></button>
                }
                <button  onClick={()=> dispatch(increase(props.data))}>+</button>
            </div>
        </div>
    );
};

export default Cart;