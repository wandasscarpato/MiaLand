import React,{useState} from "react";
import ItemCount from "../ItemCount/ItemCount"
import {Link} from "react-router-dom";

 const ItemDetail = ({item}) => {

  const [number, setNumber]=useState(0);

  const onAdd = ((cantidad) =>{
    setNumber(cantidad)
  })
console.log(number);
  return (
    <div className="items itemsDetail">
      <div>
      <img src={item.Image} alt="img" />
      </div>
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h2>${item.price}</h2>
        {number===0 ? <ItemCount functionOnAdd={onAdd} stock={item.stock} initial="1"/> : <Link to="/carrito"><button>Finalizar compra</button></Link>}
      </div>
    </div>
  )
};
export default ItemDetail;