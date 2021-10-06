import React, { createContext, useState } from 'react'
export const CartContext = createContext();

const CustomProvider = ({children}) => {
    const [itemsCart, setItemsCart]=useState([]);

    const eliminarTodo = () => {
        setItemsCart([]);
    }
   
    const agregarProducto = (item) => {
        let existe=null;
        existe=itemsCart.find(producto => producto.item.id === item.item.id);
        if(existe===undefined){
            setItemsCart([...itemsCart, item])
        }
    else{
        itemsCart.forEach((items)=>{
          if(items.item.id===item.item.id){
            items.cantidad=items.cantidad+item.cantidad
            }
        })
    }
    }
    const eliminarSeleccionado = ((evt) => {
        setItemsCart(itemsCart.filter(prod=>prod.item.id !== +evt.currentTarget.value));
    })
    return (
        <CartContext.Provider value={[itemsCart, eliminarSeleccionado, agregarProducto, eliminarTodo]}>
            {children}
        </CartContext.Provider>
    )
}

export default CustomProvider;
