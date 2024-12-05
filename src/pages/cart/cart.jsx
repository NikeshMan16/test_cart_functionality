import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../components/shop-context'
import { CartItem } from './cartItem'
import './cart.css';


import { useNavigate } from 'react-router-dom';

export const Cart = () => {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate()

  return (
    <div className='cart'>
        <div>
            <h1>Your Cart Items</h1>
        </div>
        <div className='cartItems'>
            {PRODUCTS.map((product) => {
                if (cartItems[product.id] != 0) {
                    return <CartItem data ={product}/>
                }
            }
            
            )}
            {totalAmount >0 ?(
            <div className='checkout'>
                
                <p className='totalSum'>Subtotal: <span>${totalAmount}</span></p>
                <button onClick={() => navigate("/")}> Continue Shopping </button>
                <button> Checkout </button>
            </div>
            ): (
                <div className='checkout'>
                <h1>Your Cart is empty</h1>
                <button onClick={() => navigate("/")}> Check out some products </button>
                </div>
            )}
        </div>
    </div>
  )
};
