import React, { useContext } from "react";
import "./Form.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { CartContext } from "../../context/CartContext";
import swal from "sweetalert";

const Form = ({ importeTotal, productos }) => {
  const [itemsCart, , ,] = useContext(CartContext);
  const terminarCompra = async (e) => {
    e.preventDefault();
    const usuario = {
      nombre: e.target[0].value,
      telefono: e.target[1].value,
      email: e.target[2].value,
    };
    let productosComprados = [];

    itemsCart.map(
      (producto) =>
        (productosComprados = [
          ...productosComprados,
          {
            nombre: producto.item.title,
            cantidad: producto.cantidad,
            precio: producto.item.price,
          },
        ])
    );
    const docRef = await addDoc(collection(db, "orders"), {
      usuario: usuario,
      product: productosComprados,
      /*date: today,
      total: total,*/
    });
    swal("Compra exitosa!", `id de compra:${docRef.id}`, "success");
  };
  return (
    <div className="central">
      <form className="form" onSubmit={terminarCompra}>
        <input type="text" placeholder="Nombre" required />
        <input type="number" placeholder="Telefono" required />
        <input type="email" placeholder="Email" required />
        <input className="btn-enviar" value="enviar" type="submit" />
      </form>
    </div>
  );
};
export default Form;
