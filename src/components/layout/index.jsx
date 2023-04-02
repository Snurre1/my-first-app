import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import ProductList from '../productslist';
import SingleProduct from '../singleproduct';
import RegisterPerson from '../register';
import * as S from "./index.styled"
import MyCart from '../store';
import CheckOut from '../checkoutsuccess';
import { useSelector } from 'react-redux';

function Home() {
  return (<div><ProductList/></div>
    )
}
function Products() {
  return(<div><SingleProduct /></div>)
}


function RouteNotFound() {
  return <div>Page not found</div>;
}

function Nav() {
  const { cartProductIds } = useSelector((state)=> state.cart)
  return (
   
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register/index.jsx">Register</Link>
        </li>
        </ul>
      <Link to="/store/index.jsx"><S.CartWrapper><i className="fa fa-shopping-cart">{cartProductIds.length}</i></S.CartWrapper></Link>
    </nav>
  );
}


function Header() {
  return (
    <header>
      <S.HeaderWrapper>
        <S.Header>
          YourStore
        </S.Header>
        <Nav />
      </S.HeaderWrapper>
    </header>
  );
}

function Footer() {
  return  <footer><S.FooterWrapper>Thomas Henriksen &copy;</S.FooterWrapper></footer>;
}


function Layout() {
  return(
    <div>
      <Header />
      <S.BodyWrapper>
        <Outlet />
        <Footer />
      </S.BodyWrapper>
    </div>
  );
}

function Setup() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Products />} />
        <Route path="/register/index.jsx" element={<RegisterPerson />} />
        <Route path="/store/index.jsx" element={<MyCart />} />
        <Route path="/checkoutsuccess/index.jsx" element={<CheckOut/>}/>
        <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
  );
}

export default Setup;