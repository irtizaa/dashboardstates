import React from "react";
import "./Navbar.css";
import rocket from "../../assets/rocket.png";
import lock from "../../assets/locked.png";
import star from "../../assets/glowing-star.png";
import idbutton from "../../assets/id-button.png";
import memo from "../../assets/memo.png";
import order from "../../assets/package.png";
import LinkWithIcon from "./LinkWithIcon";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="align_center navbar">
      <div className="align_center">
        <h1 className="navbar_heading">CartWish</h1>
        <form className="align_center navbar_form">
          <input
            type="text"
            className="navbar_search"
            placeholder="Search Products"
          />
          <button type="submit" className="search_button">
            Submit
          </button>
        </form>
      </div>

      <div className="align_center navbar_links"></div>
      <LinkWithIcon title="Home" Link="/" emoji={rocket} />
      <LinkWithIcon title="Products" Link="/products" emoji={star} />
      <LinkWithIcon title="Login" Link="/login" emoji={idbutton} />
      <LinkWithIcon title="SingUp" Link="/signup" emoji={memo} />
      <LinkWithIcon title="My orders" Link="/myorders" emoji={order} />
      <LinkWithIcon title="Logout" Link="/logout" emoji={lock} />
      <NavLink to="/cart" className="align_center">
        Cart <p className="align_center card_counts">0</p>
      </NavLink>
    </nav>
  );
};

export default Navbar;
