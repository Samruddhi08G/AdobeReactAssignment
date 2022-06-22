import React from 'react';
import App from './App';
import Home from './component/HomeComponent/Home';
import ProductDetails from './component/ProductDetailsComponent/ProductDetails';
import Cart from './component/CartComponent/Cart';
import { BrowserRouter, Routes, Route, useLocation, Navigate, useNavigate } from "react-router-dom";

const Router = () =>(

    <BrowserRouter>
        <App>
            <Routes>
                <Route path="adobereactassignment" element={
                    <Home />
                } />
                <Route path="/product/:productId" element={
                    <ProductDetails />
                } />
                <Route path="/cart" element={
                    <Cart />
                } />
                
            </Routes>
        </App>
    </BrowserRouter>
    
);
export default Router;