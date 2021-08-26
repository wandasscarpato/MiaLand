import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "./ItemlistContainer.css";
import Spinner from "../Spinner/Spinner";
//JSON
import PostData from "./data/productos";

const ItemListContainer = ({ match }) => {
  const [DataProds, setDataProds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    new Promise((resolve, reject) => {
      let array = [];
      setTimeout(() => {
        if (match.params.id === undefined) {
          setDataProds(PostData);
        } else {
          PostData.forEach((prod) => {
            if (prod.category === Number(match.params.id)) {
              array.push(prod);
            }
          });
          setDataProds(array);
        }
        resolve(true);
        setIsLoading(false);
      }, 1500);
    });
  }, [match.params.id]);

  return <>{isLoading ? <Spinner /> : <ItemList products={DataProds} />}</>;
};
export default ItemListContainer;
