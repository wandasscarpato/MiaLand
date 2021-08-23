import { useState, useEffect }  from "react";
import ItemList from "./ItemList"
import "./ItemlistContainer.css";
import Spinner from "../Spinner/Spinner"
//JSON
import PostData from "./data/productos";

const ItemListContainer = () => {
  const [DataProds, setDataProds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(()=>{
        setDataProds(PostData);
        resolve(true);
        setIsLoading(false);
      },1500)
    })
  }); 
  return (
    <>
    {isLoading ? <Spinner/> : <ItemList products={DataProds}/>}  
    </>
  );
};
export default ItemListContainer;
