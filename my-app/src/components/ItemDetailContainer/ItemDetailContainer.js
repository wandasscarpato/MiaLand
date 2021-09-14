import { useState, useEffect,useCallback } from "react";
import ItemDetail from "./ItemDetail";
import Spinner from "../Spinner/Spinner";
//JSON
import { db } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";
const ItemDetailContainer = ({ match }) => {
  const [DataProds, setDataProds] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    let id=match.params.id
    const dataProduct= await getDoc(doc(db,'products',id));
    setDataProds({id:id, ...dataProduct.data()})
  }
/*  setTimeout(()=>{
          PostData.map((postDetail) => {
              if(+postDetail.id===+match.params.id){
                return setDataProds(postDetail)
              }else{
                return 0;
              }
          })
          resolve(true);
          setIsLoading(false);
        },2000) */
  useEffect(() => {
    getProducts();
    setIsLoading(false);
  },[]);
  return <>{isLoading ? <Spinner /> : <ItemDetail item={DataProds} />}</>;
};
export default ItemDetailContainer;
