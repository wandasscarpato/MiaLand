import React, { useContext, useState, useEffect } from "react";
import Cart from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import Categorias from "./data/categorias";
import "./nav.css";
import { CartContext } from "../../context/CartContext";

export const Nav = () => {
  const [itemsCart] = useContext(CartContext);
  const [cantidadItems, setCantidadItems] = useState(0);

  const recorrerItemsCart = () => {
    let cantidad = 0;
    itemsCart.forEach((item) => {
      cantidad = cantidad + item.cantidad;
    });
    setCantidadItems(cantidad);
  };

  useEffect(() => {
    recorrerItemsCart();
  });

  return (
    <div>
      <div className="navegacion">
        <ul className="menu">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link>Productos</Link>
            <ul className="submenu">
              {Categorias.map((cate) => {
                return (
                  <li>
                    <Link to={`/categoria/${cate.id}`}>{cate.nombre}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            {itemsCart.length !== 0 ? (
              <Link to={`/carrito`}>
                <Cart number={cantidadItems} />
              </Link>
            ) : (
              <></>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
