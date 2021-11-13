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
  }, [CartContext]);

  return (
    <>
      {itemsCart.map((productosCarrito) => {
        return (
          <>
            <div key={productosCarrito.item.id} className="productoCarrito">
              <img src={productosCarrito.item.image} alt="imagen prod" />
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
            <div className="alinear">
              <button className="buttonPrimary" onClick={eliminarTodo}>
                Elminar todo
              </button>
              <Link
                to="/form"
                importeTotal={importeTotal}
                productos={itemsCart}
              >
                {" "}
                <button className="buttonPrimary btnn">Finalizar compra</button>
              </Link>
            </div>
          </div>
        ) : (
          <Link to="/">Volver al inicio</Link>
        )}
      </div>
    </>
  );
};

export default Cart;
