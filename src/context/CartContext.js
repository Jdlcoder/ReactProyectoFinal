import React, { useContext, createContext, useState , useEffect} from "react";

export const CartContext = React.createContext([]);

export const useCartContext = () => {return  useContext(CartContext)}

export const CartProvider = ({children}) => {
      
    const [cartItems, setCartItems] = useState([])
    

//     Métodos recomendados: 
// addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
// removeItem(itemId) // Remover un item del cart por usando su id
// clear() // Remover todos los items
// isInCart: (id) => true|false

    //verifica la existencia de un producto en el carrito
    const isInCart = (id) => {
        if ( cartItems.find( e => e.id === id) ) {
            return true
        } else {
            return false
        }
    }

    useEffect(() => {
        console.log("useEffect",cartItems)
      }, [cartItems])
    
    //agregamos el objeto producto al array, y si ya existe actualizamos el valor de count
    const addItemCart = (data) => {
        if (isInCart(data.id)) {
            const cartItemsTmp = cartItems.map(e => {
                if (e.id === data.id){
                    const newProduct = {...e,count:e.count+data.count}
                    return newProduct
                }else{
                    return e
                }
            })
            setCartItems(cartItemsTmp)
        } else {
            setCartItems([...cartItems, data])
        }
    }

    //agregamos el objeto producto al array, y si ya existe actualizamos el valor de count
    const removeItemCart = (id) => {

        const index = cartItems.findIndex((e) => e.id === id);
        
        const cartItemsTmp = cartItems.filter( (e,i) => i !== index)
        
        setCartItems(cartItemsTmp)
        
    }

    const clearCart = () => {
        setCartItems([])
    }

    const getCountItemsCart = () => {
        const sumCount = cartItems.reduce((total, e) => total + e.count, 0);
        return sumCount
    }

    const getItemsCart = () => {
        return cartItems
    }

    return (
        <CartContext.Provider value={{cartItems,addItemCart,removeItemCart,isInCart,clearCart,getCountItemsCart,getItemsCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;