import React from 'react';
import { Link } from 'react-router-dom';
import * as T from "./index.styled"

function CheckOut() {
  return (
    <T.CheckHomeStraigth>
      <div>
          <h1>Checkout Success! (in a way)</h1>
          <Link to="/" style={{ textDecoration: 'none' }}><T.HomeButton>Home</T.HomeButton></Link>
      </div></T.CheckHomeStraigth>
     
    
  )
}

export default CheckOut;