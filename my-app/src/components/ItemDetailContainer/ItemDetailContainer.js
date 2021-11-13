import { useState, useEffect, useCallback } from "react";
import ItemDetail from "./ItemDetail";
import { db } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";
import "../../sass/style.css";

const ItemDetailContainer = ({ match }) => {
  const [DataProds, setDataProds] = useState({});

  const id = match.params.id;

  const getProducts = async (id) => {
    const dataProduct = await getDoc(doc(db, "products", id));
    setDataProds({ id: id, ...dataProduct.data() });
  };
  useEffect(() => {
    getProducts(id);
  }, [id]);
  return (
    <>
      {DataProds.stock === undefined ? (
        <h1 className="sinProductos">Producto no existe</h1>
      ) : (
        <ItemDetail item={DataProds} />
      )}
    </>
  );
};
export default ItemDetailContainer;
