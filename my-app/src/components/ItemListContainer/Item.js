import React from "react";
import {Link} from "react-router-dom";
import "./ItemlistContainer.css";
import "../../sass/style.css"
const Item = ({id, title, image, description, price, stock}) => {
 
  return (
    <div className="items">
      <div>
        <h3>{title}</h3>
        <img className="imagenProd" src={image} alt="img" />
        <h2>${price}</h2>
        <Link className="buttonPrimary" to={`/producto/${id}`}>Ver más</Link>
      </div>
      {/*<ItemCount stock={stock} initial="1" />*/}
    </div>
  );
};
export default Item;
