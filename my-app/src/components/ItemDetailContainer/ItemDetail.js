import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "../../sass/style.css";

const ItemDetail = ({ item }) => {
  const [, , , agregarProducto] = useContext(CartContext);
  const [number, setNumber] = useState(0);

  const onAdd = (cantidad) => {
    setNumber(cantidad);
    agregarProducto({ item, cantidad });
  };

  return (
    <>
      <h3 class="title detalle">{item.title}</h3>
      <div className="items itemsDetail">
        <div>
          <img src={item.image} alt="img" />
        </div>
        <div>
          <h2 class="precio">${item.price}</h2>
          {number === 0 ? (
            <ItemCount functionOnAdd={onAdd} stock={item.stock} initial="1" />
          ) : (
            <Link to="/carrito">
              <button>Finalizar compra</button>
            </Link>
          )}
        </div>
      </div>
      <p class="descripcion">{item.description}</p>
    </>
  );
};
export default ItemDetail;
