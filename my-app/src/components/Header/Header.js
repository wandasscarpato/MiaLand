import Logo from "./img/miaLand.png";
import React from "react";
import "../CartWidget/CartWidget";
import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="HeaderLogo" src={Logo} alt="mia" />
      </Link>
      <Nav />
    </header>
  );
};
export default Header;
