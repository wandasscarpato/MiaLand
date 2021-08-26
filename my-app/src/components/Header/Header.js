import Logo from "./img/miaLand.png";
import React, {useEffect} from "react";
import M from "materialize-css";
import "../CardWidget/CardWidget";
import Cart from "../CardWidget/CardWidget";
import {Link} from "react-router-dom";
import Categorias from "./data/categorias";

const Header = () => {
    useEffect(() => {
        let dropdowns = document.querySelectorAll(".dropdown-trigger");
        let options = {
          inDuration: 300,
          outDuration: 700,
          hover: true,
          coverTrigger: false,
          constrainWidth: false
        };
      M.Dropdown.init(dropdowns, options);
      }, []);
  return (
    <header className="header">
      <ul id="dropdown1" className="dropdown-content">
          {Categorias.map((cate)=>{
              return(
                  <li>
                      <Link to={`/categoria/${cate.id}`}>{cate.nombre}</Link>
                  </li>
              )
          })}
      </ul>
      <nav>
        <div className="nav-wrapper">
          <Link  to="/" className="brand-logo">
            <img src={Logo} alt="logo" className="HeaderLogo"/>
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <a className="dropdown-trigger" href="#!" data-target="dropdown1">
               Productos
              </a>
            </li>
            <li>
              <a href="badges.html"><Cart/></a>
            </li>
          </ul>
        </div>
      </nav>

    </header>
  );
};
export default Header;
