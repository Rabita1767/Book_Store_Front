
import Home from './pages/Home/Home';
import Layout from './components/Layout/layout';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Product from './pages/Product/Product';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Filter from './pages/Filter/Filter';
import ProductDetails from './pages/Product/productDetails';
import Form from './pages/form';
import Authentication from "./components/Authentication"
import Header from './components/Header/header';
import AddBook from './pages/addBook';
import UpdateBook from './pages/updateBook';
import ViewCart from './pages/viewCart';
import Authenticate from './components/Authentication';
import UpdateUser from './pages/updateUser';
import User from './pages/user';
import AddDiscount from './pages/addDiscount';
import Checkout from './pages/checkout';
import AddBalanceUser from './pages/addBalanceUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewTransaction from './pages/viewTransaction';
import "./App.css"

function App() {

  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/getAllUser" element={<User />} />
          <Route path="/updateUser/:userId" element={<UpdateUser />} />
          <Route path="/addDiscount" element={<AddDiscount />} />
          <Route path="addBalanceUser" element={<AddBalanceUser />} />
          <Route element={<Authenticate />}>
            <Route path="/addBook" element={<AddBook />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/product/:updateId" element={<UpdateBook />} />
            <Route path="/viewCart" element={<ViewCart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/viewTransaction" element={<ViewTransaction />} />
          </Route>
        </Routes>
      </Router>
    </>
  );

}

export default App
