import React, { useContext, useState, useEffect } from "react";
import "../../sass/style.css";
import "./cart.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const [itemsCart, eliminarSeleccionado, , eliminarTodo] = useContext(
    CartContext
  );

  const [importeTotal, setImporteTotal] = useState(0);

  const calcularImporteTotal = () => {
    let precio = 0;
    itemsCart.forEach((item) => {
      precio = precio + item.cantidad * item.item.price;
    });
    setImporteTotal(precio);
  };

  useEffect(() => {
    calcularImporteTotal();
  });

  return (
    <>
      {itemsCart.map((productosCarrito) => {
        return (
          <>
            <div className="productoCarrito">
              <img src={productosCarrito.item.Image} alt="imagen prod" />
              <span>{productosCarrito.item.title}</span>
              <span>{productosCarrito.cantidad}</span>
              <span>${productosCarrito.item.price}</span>
              <button
                className="buttonSecundary"
                value={productosCarrito.item.id}
                onClick={eliminarSeleccionado}
              >
                Elminar
              </button>
            </div>
          </>
        );
      })}
      <div className="divButton">
        {itemsCart.length ? (
          <div>
            <h3>Importe total ${importeTotal}</h3>
            <button className="buttonPrimary" onClick={eliminarTodo}>
              Elminar todo
            </button>
          </div>
        ) : (
          <Link to="/">Volver al inicio</Link>
        )}
      </div>
    </>
  );
};

export default Cart;
