import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Home/HomePage";
import ProductsPage from "../Products/ProductsPages";
import SingleProductPage from "../SingleProduct/SingleProductPage";
import CartPage from "../Cart/CartPage";
import MyOrderPage from "../MyOrder/MyOrderPage";
import LoginPage from "../../Authentication/LoginPage";
import SingupPage from "../../Authentication/SingupPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/1" element={<SingleProductPage />} />
      <Route path="/signup" element={<SingupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/myorders" element={<MyOrderPage />} />
    </Routes>
  );
};

export default Routing;
