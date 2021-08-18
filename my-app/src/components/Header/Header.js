import Logo from "./img/miaLand.png"
import React from 'react';
import "../CardWidget/CardWidget"
import Cart from "../CardWidget/CardWidget";
const Header = () =>{
    return (
    <header className="Header"> 
        <img src={Logo} className="HeaderLogo"/>
        <nav className="NavBar"> 
        <ul>
            <li><a href="./index.html">Inicio</a></li>
            <li><a href="./productos.html">Productos</a></li>
            <li><a href="./contacto.html">Contacto</a></li>
            <Cart/>
        </ul>
        </nav>
    </header>
    )
}
export default Header;