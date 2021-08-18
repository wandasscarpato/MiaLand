import React from "react";
import ItemList from "./ItemList"
import "./ItemlistContainer.css";
const ItemListContainer = ({ title, image, description, price, stock}) => {
 
  return (
    <ItemList/>
  );
};
export default ItemListContainer;
