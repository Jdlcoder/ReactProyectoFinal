import './Cart.css';
import {CartProvider,useCartContext} from '../../context/CartContext'
import {useState} from 'react'
import { doCheckout } from '../../services/firebase'

import CartForm from '../cartForm/CartForm'
import { Link } from 'react-router-dom'

import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap'

const Cart = (props) => {

    const  [showCheckout, setshowCheckout ] =useState(false)

    const  {getItemsCart,removeItemCart,clearCart} = useCartContext()
    const  [newOrder, setNewOrder] = useState({})
    const [textResult, setTextResult] = useState('')
    const [isDone, setIsDone] = useState(false)

    const items = getItemsCart()

    const calculateTotal = () => {
        const sumTotal = items.reduce((total, e) => total + e.price * e.count, 0);
        return sumTotal.toFixed(2)
    }

    const removeItem = (id) => {
        removeItemCart(id)
        console.log("borrando")
    }

    const sendOrder = async (e) => {
        console.log("sendOrder - Valores recibidos:",newOrder)
        const NewOrder = {
            items:items,
            name:e.name,
            surname:e.surname,
            email:e.email,
            total:calculateTotal(),
            submittimestamp:Date.now()
        }

        const orderId = await doCheckout(NewOrder)
            // alert("El pedido se generó correctamente con el id:"+orderId)
            setTextResult(`El pedido se generó correctamente con el id: ${orderId})`)
            setIsDone(true)
    }
  
    if (items.length > 0 ) {
        if (! isDone)
        {
            return (
                <div className="cart">
                    <h3>Estos son los productos que tenés en el carrito</h3>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Título</th>
                        <th>Categoría</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Subtotal</th>
                        <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.category}</td>
                            <td>{item.count}</td>
                            <td>{item.price}</td>
                            <td>{(item.price*item.count).toFixed(2)}</td>
                            <td><button onClick={() => removeItem(item.id)}>X</button></td>
                        </tr>
                        ))}
                    </tbody>
                    </Table>
                    <h3 className="right-align">Total ${calculateTotal()}</h3>
                    <div>
                        <h3 className="clearCart">{textResult}</h3>
                    </div>
                    <div className="cartForm">
                        <CartForm clearCart={clearCart} sendOrder={sendOrder}/>
                    </div>
                </div>
            )
        }else{
            return (
                <div className="cart">
                    <h3>Estos son los productos que tenés en el carrito</h3>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Título</th>
                        <th>Categoría</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Subtotal</th>
                        <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.category}</td>
                            <td>{item.count}</td>
                            <td>{item.price}</td>
                            <td>{(item.price*item.count).toFixed(2)}</td>
                            <td><button onClick={() => removeItem(item.id)}>X</button></td>
                        </tr>
                        ))}
                    </tbody>
                    </Table>
                    <h3 className="right-align">Total ${calculateTotal()}</h3>
                    <div>
                        <h3 className="clearCart">{textResult}</h3>
                    </div>
                    <Link onClick={clearCart} to="/">Continuar</Link>
                </div>
            )
        }
         return (
            <div className="cart">
                <h3>Estos son los productos que tenés en el carrito</h3>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Título</th>
                    <th>Categoría</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Subtotal</th>
                    <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.category}</td>
                        <td>{item.count}</td>
                        <td>{item.price}</td>
                        <td>{(item.price*item.count).toFixed(2)}</td>
                        <td><button onClick={() => removeItem(item.id)}>X</button></td>
                    </tr>
                    ))}
                </tbody>
                </Table>
                <h3 className="right-align">Total ${calculateTotal()}</h3>
                <div>
                    <h3 className="clearCart">{textResult}</h3>
                </div>
                <div className="cartForm">
                    <CartForm clearCart={clearCart} sendOrder={sendOrder}/>
                </div>
            </div>
        )
    }else{
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