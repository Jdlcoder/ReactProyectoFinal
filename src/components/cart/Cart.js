import { doCheckout } from '../../services/firebase';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import {useCartContext} from '../../context/CartContext';

import CartForm from '../cartForm/CartForm';
import CartTable from '../cartTable/CartTable';

import './Cart.css';

const Cart = () => {

    //Contexto
    const  {getItemsCart,clearCart} = useCartContext();
    
    const  [textResult, setTextResult] = useState('');
    const  [isDone, setIsDone] = useState(false);

    // Me traigo del contexto los items del carrito
    const items = getItemsCart();

    // Obtengo el importe total multiplicando precio unitario por cantidad de cada elemento del carrito
    const calculateTotal = () => {
        const sumTotal = items.reduce((total, e) => total + e.price * e.count, 0);
        return sumTotal.toFixed(2);
    }
    
    //función para persistir en firestore la orden con los items y los datos del comprador
    const sendOrder = async (e) => {

        //incluimos todos los datos del producto + la cant. de cada uno + nombre + apellido + email + total + timestamp
        const NewOrder = {
            items:items,
            name:e.name,
            surname:e.surname,
            email:e.email,
            total:calculateTotal(),
            submittimestamp:Date.now()
        }

        //usamos la función de firebase para persistir el objeto
        const orderId = await doCheckout(NewOrder);

        //Mostramos en pantalla el número de orden generado
        setTextResult(`La orden se generó correctamente con el id: ${orderId}`);

        //Cambio valor del flag para poder modificar el render
        setIsDone(true);
    }
  
    //Si no hay elementos en el carrito, mostramos una leyenda y el link para volver a productos. Sino, mostramos la grilla
    if (items.length > 0 ) {
        //Si hay productos en el carrito, pero aún no se confirmó la compra, mostramos el form que solicita datos de contacto, sino no.
        if (!isDone)
        {
            return (
                <div className="cart">
                    <CartTable items={items}/>
                    <h3 className="right-align">Total ${calculateTotal()}</h3>                    
                    <div className="cartForm">
                        <CartForm clearCart={clearCart} sendOrder={sendOrder}/>
                    </div>
                </div>
            )
        }else{
            //Cuando ya se confirmo la orden
            return (
                <div className="cart">
                    <CartTable items={items}/>
                    <h3 className="right-align">Total ${calculateTotal()}</h3>
                    <h3 className="clearCart">{textResult}</h3>
                    {/* //Cuando el usuario sale de pantalla limpio el carrito */}
                    <Link onClick={clearCart} to="/">Continuar</Link>
                </div>
            )
        }
         
    }else{
        //Este es el render cuando no hay elementos en el carrito
        return (
            <>
                <h3 className="emptyCart">No hay ningún producto en el carrito</h3>
                <div className="itemDetailVoler">
                    <Link to="/">Volver a mis productos</Link>
                </div>
            </>
        )
    }
}

export default Cart;