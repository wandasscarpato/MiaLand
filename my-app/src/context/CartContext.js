import React, { createContext, useState } from 'react'
export const CartContext = createContext();

const CustomProvider = ({children}) => {
    const [itemsCart, setItemsCart]=useState([]);

    const eliminarTodo = () => {
        setItemsCart([]);
    }
   
    const agregarProducto = (item) => {
        let existe=null;
        existe=itemsCart.find(producto => item.item.id);
        if(existe!==null){
            setItemsCart([...itemsCart, item])
        }
    else{
        itemsCart.forEach((items)=>{
          if(items.id===item.item.id){
            item.cantidad=items.cantidad+item.cantidad
            }
        })
    }
    }
    const eliminarSeleccionado = (evt) => {
        const producto = itemsCart.filter(prod=>prod.item.id !== +evt.currentTarget.value);
        setItemsCart(producto);
    }
    return (
        <CartContext.Provider value={[itemsCart, eliminarSeleccionado, agregarProducto, eliminarTodo]}>
            {children}
        </CartContext.Provider>
    )
}

export default CustomProvider;
