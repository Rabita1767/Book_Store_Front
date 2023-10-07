import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Layout from './components/Layout/layout';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Product from './pages/Product/Product';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Filter from './pages/Filter/Filter';
import ProductDetails from './pages/Product/productDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/filter" element={<Filter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
