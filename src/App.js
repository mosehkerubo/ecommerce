import React from 'react';
import Home from "./pages/Home";

import './App.css';
import ProductPage from './pages/ProductPage';
import SingleProductPage from './pages/SingleProductPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CartPage from './pages/CartPage';
import{BrowserRouter as Router ,Routes,Route} from "react-router-dom";

function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/CartPage" element={<CartPage/>} />
    <Route path="/LoginPage" element={<LoginPage/>} />
    <Route path="/SignUpPage" element={<SignUpPage/>} />

     </Routes>
</Router>
 
 
  
  );
}

export default App;
