
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
import Form from './pages/form';
import "./App.css"

function App() {

  return (
    <>
      <Login />
    </>
  )
}

export default App
