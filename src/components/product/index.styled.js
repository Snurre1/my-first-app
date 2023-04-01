import styled from "styled-components";

export const ProductStraight = styled.div`
  margin: auto;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: yellow;
  max-width: 300px;
  max-height: 500px;
`;
export const TitleContainer = styled.h2`
  text-align: center;
`;
export const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 140px;
`;

export const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

export const ProductDescriptionsContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

export const RatingContainer = styled.p`
  margin: auto;
`;

export const Price = styled.div`
  color: ${(props) => (props.isOnSale ? "none" : "red")};
  text-decoration: ${(props) => (props.isOnSale ? "none" : "line-through")};
  margin-right: 10px;
`;

export const PricesContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
export const ProductButton = styled.div`
  padding: 20px;
  margin: auto auto 0 auto;
`;
