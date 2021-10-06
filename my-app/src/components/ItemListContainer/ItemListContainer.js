import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "../../sass/style.css";
import Spinner from "../Spinner/Spinner";
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = ({ match }) => {
  const [DataProds, setDataProds] = useState([]);
  const id=match.params.id;
  const getProducts = async (id) => {
    const docs = [];
    let queryProducts;
    if (id) {
      queryProducts = query(
        collection(db, "products"),
        where("categorias", "==", Number(match.params.id))
      );
    } else {
      queryProducts = query(collection(db, "products"));
    }
    //const queryProducts = query(collection(db, "products"));
    const querySnapshot = await getDocs(queryProducts);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setDataProds(docs);
  };

  useEffect(() => {
    getProducts(id);
  },[id]);
  return <>{DataProds.length<1 ? <h1 className="sinProductos">No hay productos de esta categoria</h1> : <ItemList products={DataProds} />}</>;
};
export default ItemListContainer;
