import React from "react";
import cartSlice from "../../data/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as P from "../product/index.styled"


function Product({product: {title, description, imageUrl, price, discountedPrice, rating, id, tags, reviews,}}) {
  
    const { cartProductIds } = useSelector((state) => state.cart)
    const { addToCart } = cartSlice.actions
    const dispatch = useDispatch()
   
  console.log(cartProductIds)
  return (
    
      <div>
        <P.ProductWrapper>
          <P.TitleContainer>{title}</P.TitleContainer>
          <P.ProductImageContainer><P.ProductImage src={imageUrl} /></P.ProductImageContainer>
          <P.ProductDescriptionsContainer>{description}</P.ProductDescriptionsContainer>
          <P.RatingContainer>Rating: {rating} of 5</P.RatingContainer>
          <P.PricesContainer>
            Price: 
            <P.Price isOnSale={price ===discountedPrice}>{price}</P.Price>
            <div>{discountedPrice < price && discountedPrice}NOK</div>
          </P.PricesContainer><div>
        <Link to={id} style={{ textDecoration: 'none' }}> <P.AddToCartButton2> View item</P.AddToCartButton2></Link>
          <P.AddToCartButton onClick={()=> dispatch(addToCart(id))}>Add to Cart</P.AddToCartButton></div>
        </P.ProductWrapper>
      </div>
  ) 
 
   
}
export default Product