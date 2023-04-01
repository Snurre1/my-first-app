import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import ProductList from '../productslist';
import SingleProduct from '../singleproduct';
import * as S from "./index.styled"
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
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}


function Header() {
  return (
      <header><S.HeaderWrapper>
          <S.Header>
      YourStore</S.Header>
      <Nav /></S.HeaderWrapper>
    </header>
  );
}

function Footer() {
  return  <footer><S.FooterWrapper>Thomas Henriksen &copy;</S.FooterWrapper></footer>;
}


function Layout() {
  return (
    <div>
          <Header />
          <S.BodyWrapper>
        <Outlet />
        <Footer /></S.BodyWrapper>
      </div>
  );
}

function Setup() {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Products/>} />
        <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    
  );
}

export default Setup;