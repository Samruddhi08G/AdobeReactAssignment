import React from 'react';
import App from './App';
import Home from './component/HomeComponent/Home';
import ProductDetails from './component/ProductDetailsComponent/ProductDetails';
import Cart from './component/CartComponent/Cart';
import { BrowserRouter, Routes, Route, useLocation, Navigate, useNavigate } from "react-router-dom";

import Sample from './component/SampleComponent/Sample';


const Router = () =>(

    <BrowserRouter>
        <App>
            <Routes>
                <Route path="/" element={
                    <Home />
                } />
                <Route path="/product/:productId" element={
                    <ProductDetails />
                } />
                <Route path="/cart/:productId" element={
                    <Cart />
                } />
                <Route path="#" element={
                    <Sample />
                } />
            </Routes>
        </App>
    </BrowserRouter>
    
);
export default Router;