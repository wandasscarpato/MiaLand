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
        console.log(existe)
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
