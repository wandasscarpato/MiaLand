import React from "react";
import ItemCount from "../ItemCount/ItemCount"
 const ItemDetail = ({item}) => {
  return (
    <div className="items itemsDetail">
      <div>
      <img src={item.Image} alt="img" />
      </div>
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h2>${item.price}</h2>
        <ItemCount stock={item.stock} initial="1"/>
      </div>
    </div>
  )
};
export default ItemDetail;