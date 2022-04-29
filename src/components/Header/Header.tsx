import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./headerStyles.css";

interface Props {
  scrolled: boolean;
}

const Header: React.FC<Props> = ({ scrolled }) => {
  const [isAboutVisited, setIsAboutVisited] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    pathname === "/about" ? setIsAboutVisited(true) : setIsAboutVisited(false);
  }, [pathname]);

  return (
    <header
      className={scrolled ? "app-header app-header-shadow" : "app-header"}
    >
      <NavLink to={"/"} className="nav-item-left heavy-weight-font">
        <span className="bold-text">marianne bolduc</span>
      </NavLink>
      <NavLink to={"/about"} className="nav-item-right heavy-weight-font">
        <span className="bold-text">
          {isAboutVisited && "_"}à propos de moi
        </span>
      </NavLink>
    </header>
  );
};

export default Header;
