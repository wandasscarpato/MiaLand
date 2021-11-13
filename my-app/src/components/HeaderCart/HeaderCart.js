import React from "react";
import "./HeaderCart.css";
const HeaderCart = ({ estado }) => {
  return (
    <div className="headerCart">
      <span>Imagen</span>
      <span>Nombre</span>
      <span>Cantidad</span>
      <span>Precio</span>
      <span>Eliminar</span>
    </div>
  );
};

export default HeaderCart;
