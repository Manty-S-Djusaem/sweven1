import React from 'react';
import module from './Cart.module.scss'
import cart from '../assets/cart.png'
function Cart(props) {
    return (
        <div className={module.cart}> 
            <img src={cart}/>
            <h3>Ваша корзина пуста </h3>
          <div className={module.line}> </div>    
            <button><a href='#'>Показать сейчас!</a></button>
        </div>
    );
}

export default Cart;