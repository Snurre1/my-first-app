import React from "react";
import { Link } from "react-router-dom";
import * as P from "../product/index.styled"
function Product({product: {title, description, imageUrl, price, discountedPrice, rating, id, tags, reviews,}}) {

  return (<P.ProductStraight><div><P.ProductWrapper><P.TitleContainer>{title}</P.TitleContainer>
    <P.ProductImageContainer><P.ProductImage src={imageUrl} /></P.ProductImageContainer>
    <P.ProductDescriptionsContainer>{description}</P.ProductDescriptionsContainer>
    <P.RatingContainer>Rating: {rating} of 5</P.RatingContainer>
    <P.PricesContainer>
     Price: 
    <P.Price isOnSale={price ===discountedPrice}>{price}</P.Price>
      <div>{discountedPrice < price && discountedPrice}NOK</div></P.PricesContainer>
  
    <P.ProductButton><Link to={id}>View item</Link></P.ProductButton>
  </P.ProductWrapper></div></P.ProductStraight>
  ) 
  
}
export default Product