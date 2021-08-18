import React from "react";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemlistContainer.css";

const Item = ({ title, image, description, price, stock}) => {
 
  return (
    <div className="items">
      <div>
        <h3>{title}</h3>
        <img src={image} alt="img" />
        <p>{description}</p>
        <h2>${price}</h2>
      </div>
      <ItemCount stock={stock}/>
    </div>
  );
};
export default Item;
