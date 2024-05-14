import React from "react";
import "./ProductsPages.css";
import ProductsSidebar from "./ProductsSidebar";
import ProductsList from "./ProductsList";
const ProductsPages = () => {
  return (
    <section className="products_page">
      <ProductsSidebar />
      <ProductsList />
    </section>
  );
};

export default ProductsPages;
