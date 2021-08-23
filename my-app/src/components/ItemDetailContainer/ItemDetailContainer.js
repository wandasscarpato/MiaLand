import { useState, useEffect }  from "react";
import ItemDetail from "./ItemDetail"
import Spinner from "../Spinner/Spinner"
//JSON
import PostData from "../ItemListContainer/data/productos";

const ItemDetailContainer = ({match}) => {
    const [DataProds, setDataProds] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      new Promise((resolve, reject) => {
        setTimeout(()=>{
          PostData.map((postDetail) => {
              if(+postDetail.id===+match.params.id){
                return setDataProds(postDetail)
              }else{
                return 0;
              }
          })
          resolve(true);
          setIsLoading(false);
        },2000)
      })
    }); 
  return (
    <>
    {isLoading ? <Spinner/> : <ItemDetail item={DataProds}/>}  
    </>
    
  );
};
export default ItemDetailContainer;

