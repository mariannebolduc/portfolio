import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./headerStyles.css";

interface Props {
  scrolled: boolean;
}

const Header: React.FC<Props> = ({ scrolled }) => {
  return (
    <header
      className={scrolled ? "app-header app-header-shadow" : "app-header"}
    >
      <NavLink to={"/"} className="nav-item-left heavy-weight-font">
        <span className="bold-text">marianne bolduc</span>
      </NavLink>
      <NavLink to={"/about"} className="nav-item-right heavy-weight-font">
        <span className="bold-text">à propos de moi</span>
      </NavLink>
    </header>
  );
};

export default Header;
