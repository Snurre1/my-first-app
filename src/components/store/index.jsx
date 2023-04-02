import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cartSlice from '../../data/cartSlice';
import * as C from "./index.styled"
//import Product from '../product';

function MyCart() {
   // const { cartProductIds } = useSelector((state) => state.cart)
   // const cartProductData = Product.cartProductIds.filter((product) => cartProductIds.includes(product.id))
    const { removeFromCart, ClearAllItems } = cartSlice.actions
    const dispatch = useDispatch()
    return (
 
      <div>
          
             <C.cartStraight><div>
                <h1>Your cart</h1>
                <div>Your stuff would have been stored here if I managed to pull the ID`s from where you added your items</div>
                <C.cartButtonContainer onClick={() => dispatch(removeFromCart())}>remove from cart</C.cartButtonContainer>
                <Link to="/checkoutsuccess/index.jsx" style={{ textDecoration: 'none' }}><C.checkoutButton>Checkout!</C.checkoutButton></Link>
              </div></C.cartStraight> 
         
          
        
      </div>
    
    
    
  );
}
 
export default MyCart;