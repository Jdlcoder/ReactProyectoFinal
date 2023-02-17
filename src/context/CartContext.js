import React, { useContext, useState } from "react";

export const CartContext = React.createContext([]);

export const useCartContext = () => {return  useContext(CartContext)}


export const CartProvider = ({children}) => {
      
    const [cartItems, setCartItems] = useState([]);
    
    //Verifica la existencia de un producto en el carrito
    const isInCart = (id) => {
        if ( cartItems.find( e => e.id === id) ) {
            return true;
        } else {
            return false;
        }
    }
    
    //Agregamos el objeto producto al array, y si ya existe actualizamos el valor de count
    const addItemCart = (data) => {
        if (isInCart(data.id)) {
            const cartItemsTmp = cartItems.map(e => {
                if (e.id === data.id){
                    const newProduct = {...e,count:e.count+data.count};
                    return newProduct;
                }else{
                    return e;
                }
            });
            setCartItems(cartItemsTmp);
        } else {
            setCartItems([...cartItems, data]);
        }
    }

    //Agregamos el objeto producto al array, y si ya existe actualizamos el valor de count
    const removeItemCart = (id) => {

        //Primero obtenemos el index para saber en la posición en que está dentro del array
        const index = cartItems.findIndex((e) => e.id === id);
        
        //Con el filter obtenemos un nuevo arryay sin el objeto que coincida con el id que queremos eliminar
        const cartItemsTmp = cartItems.filter( (e,i) => i !== index);
        
        //Actualizamos el array de items
        setCartItems(cartItemsTmp);
        
    }

    //Metodos para vaciar el carrito
    const clearCart = () => {
        setCartItems([]);
    }

    //Método usado en el Navbar para alimentar la información del carrito con la cantidad de elementos
    const getCountItemsCart = () => {
        const sumCount = cartItems.reduce((total, e) => total + e.count, 0);
        return sumCount;
    }

    //Método usado en Cart para obtener el listado de productos y mostrarlo junto a otros datos
    const getItemsCart = () => {
        return cartItems;
    }

    return (
        <CartContext.Provider value={{cartItems,addItemCart,removeItemCart,isInCart,clearCart,getCountItemsCart,getItemsCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;