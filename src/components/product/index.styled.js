import styled from "styled-components";

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgoldenrodyellow;
  width: 300px;
  height: 500px;
  border-radius: 10%;
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

export const AddToCartButton = styled.button`
    align-items: center;
    appearance: none;
    background-color: #3eb2fd;
    background-image: linear-gradient(340deg, #F44336, rgb(20, 155, 243) 99%);
    background-size: calc(100% + 20px) calc(100% + 20px);
    border-radius: 100px;
    border-width: 0;
    box-shadow: none;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-flex;
    font-family: CircularStd, sans-serif;
    font-size: 1rem;
    height: auto;
    justify-content: center;
    line-height: 1.5;
    padding: 6px 20px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.2s, background-position 0.2s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: top;
    white-space: nowrap;
  }

  :active,
  :focus {
    outline: none;
  }

  :hover {
    background-position: -20px -20px;
  }

 :focus:not(:active) {
    box-shadow: rgba(40, 170, 255, 0.25) 0 0 0 0.125em;
  }
`;

export const AddToCartButton2 = styled.button`
    align-items: center;
    appearance: none;
    background-color: #3eb2fd;
    background-image: linear-gradient(340deg, rgb(235 48 34), rgb(255 255 255) 99%);
    background-size: calc(100% + 20px) calc(100% + 20px);
    border-radius: 100px;
    border-width: 0;
    box-shadow: none;
    box-sizing: border-box;
    color: blue;
    cursor: pointer;
    display: inline-flex;
    font-family: CircularStd, sans-serif;
    font-size: 1rem;
    height: auto;
    justify-content: center;
    line-height: 1.5;
    padding: 6px 20px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.2s, background-position 0.2s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: top;
    white-space: nowrap;
  }

  :active,
  :focus {
    outline: none;
  }

  :hover {
    background-position: -20px -20px;
  }

 :focus:not(:active) {
    box-shadow: rgba(40, 170, 255, 0.25) 0 0 0 0.125em;
  }
`;
