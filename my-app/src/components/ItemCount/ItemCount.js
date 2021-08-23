import React from 'react'
import "./ItemCount.css";

const ItemCount = ({stock, initial}) => {

    const[ItemCount, setItemCount] = React.useState(Number(initial));

    const onAdd=()=>{
        setItemCount(ItemCount + 1);
    };

    const Decrement = () => {
        setItemCount(ItemCount - 1);
      };
      
    const verificarStockAdd=()=>{
        if(ItemCount<stock){
            onAdd();
        }
    }
    const verificarStockDecre=()=>{
        if(ItemCount>1){
            Decrement()
        }
    }
    
    return (
        <div className="btnCarrito">
            <button onClick={verificarStockDecre}>-</button> 
            <span>{ItemCount}</span>
            <button onClick={verificarStockAdd}>+</button> 
            <div>
            <button>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;
