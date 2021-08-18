//Componentes
import ItemListContainer from "./ItemListContainer";
import Item from "./Item";
//JSON
import PostData from "./data/productos";
import React, { useState, useEffect } from "react";

const ItemList = () => {
  const [DataProds, setDataProds] = useState([]);
  useEffect(()=>{
    new Promise((resolve, reject) => {
      setTimeout(() => {
        setDataProds(PostData);
        resolve(true);
      }, 2000);
    });
  })
  
  return (
    <section className="productos">
      {DataProds.map((postDetail) => {
        return (
          <div>
            <Item
              key={postDetail.id}
              title={postDetail.title}
              image={postDetail.Image}
              description={postDetail.description}
              stock={postDetail.stock}
              price={postDetail.price}
            />
          </div>
        );
      })}
    </section>
  );
};
export default ItemList;
