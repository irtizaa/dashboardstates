import React from "react";
import { NavLink } from "react-router-dom";

import "./LinkWithIcon.css";
const LinkWithIcon = ({ title, Link, emoji, sidebar }) => {
  return (
    <NavLink
      to={Link}
      className={sidebar ? "align_center sidebar_link" : "align_center"}
    >
      {title} <img src={emoji} alt="" className="link_emoji" />
    </NavLink>
  );
};

export default LinkWithIcon;
