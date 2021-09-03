import React, { useContext } from "react";
import "./cart.css";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const [itemsCart, eliminarSeleccionado, , eliminarTodo] = useContext(
    CartContext
  );
  return (
    <>
      {itemsCart.map((productosCarrito) => {
        return (
          <>
            <div className="productoCarrito">
              <h1>{productosCarrito.item.title}</h1>
              <img src={productosCarrito.item.Image} alt="imagen prod" />
              <span>{productosCarrito.cantidad}</span>
              <button
                value={productosCarrito.item.id}
                onClick={eliminarSeleccionado}
              >
                Elminar
              </button>
            </div>
          </>
        );
      })}
      <button onClick={eliminarTodo}>Elminar todo</button>
    </>
  );
};

export default Cart;
