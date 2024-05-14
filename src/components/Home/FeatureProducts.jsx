import React from "react";
import "./FeatureProducts.css";
import ProductCard from "../Products/ProductCard";

function FeatureProducts() {
  return (
    <section className="feature_products">
      <h2>Feature Products</h2>
      <div className="align_center featured_products_list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}

export default FeatureProducts;
