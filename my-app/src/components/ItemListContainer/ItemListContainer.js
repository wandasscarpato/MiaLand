import React from "react";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemlistContainer.css";
const ItemListContainer = ({ title, image, description, price, stock}) => {
 
  return (
    <div className="items">
      <div>
        <h3>{title}</h3>
        <img src={image} alt="img" />
        <p>{description}</p>
      </div>
      <ItemCount stock={stock}/>
    </div>
  );
};
export default ItemListContainer;
