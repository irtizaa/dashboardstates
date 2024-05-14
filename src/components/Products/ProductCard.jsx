import React from "react";
import "./ProductCard.css";
import iphone from "../../assets/iphone.jpg";
import star from "../../assets/white-star.png";
import basket from "../../assets/basket.png";
import { NavLink } from "react-router-dom";

function ProductCard({ id, image, price, title, rating, ratingCount, stock }) {
  return (
    <article className="product_card">
      <div className="product_image">
        <NavLink to={`/product/${id}`}>
          <img src={`http://localhost:5000/products/${image}`} alt="iphone" />
        </NavLink>
      </div>
      <div className="product_details">
        <h3 className="product_price">${price}</h3>
        <p className="product_title">{title}</p>

        <footer className="align_center product_info_footer">
          <div className="align_center">
            <p className="align_center product_rating">
              <img src={star} alt="Star" /> {rating}
            </p>
            <p className="product_review_count">{ratingCount}</p>
          </div>
          {stock > 0 && (
            <button className="add_to_card">
              <img src={basket} alt="basket Button" />
            </button>
          )}
        </footer>
      </div>
    </article>
  );
}

export default ProductCard;
