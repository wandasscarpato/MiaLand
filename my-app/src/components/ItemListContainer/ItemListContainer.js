import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "./ItemlistContainer.css";
import Spinner from "../Spinner/Spinner";
import {db} from "../../firebase";
import{
  collection,
  query,
  getDocs,
} from "firebase/firestore"

const ItemListContainer = ({ match }) => {
  const [DataProds, setDataProds] = useState([]);
  console.log(DataProds)
  const [isLoading, setIsLoading] = useState(true);
    const getProducts = async() =>{
      const docs = []
      const queryProducts = query(collection(db, "products"));
      const querySnapshot = await getDocs(queryProducts);
      querySnapshot.forEach((doc)=>{
        docs.push({...doc.data(), id:doc.id})
      })
      setDataProds(docs);
    };
 /*  
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
  }, [match.params.id]);*/

  useEffect(()=>{
    getProducts()
    setIsLoading(false);
  },[]);

  return <>{isLoading ? <Spinner /> : <ItemList products={DataProds} />}</>;
};
export default ItemListContainer;
