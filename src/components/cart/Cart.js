import './Cart.css';
import {CartProvider,useCartContext} from '../../context/CartContext'

import { Link } from 'react-router-dom'

import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap'


const Cart = (props) => {

    const  {getItemsCart,removeItemCart,clearCart} = useCartContext()

    const items = getItemsCart()

    const calculateTotal = () => {
        const sumTotal = items.reduce((total, e) => total + e.price * e.count, 0);
        return sumTotal.toFixed(2)
    }

    const removeItem = (id) => {
        removeItemCart(id)
        console.log("borrando")
    }

    if (items.length > 0 ) {
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
                    <Button variant={'dark'} onClick={clearCart}>Vaciar carrito</Button>
                    <Button variant={'dark'}>Finalizar compra</Button>
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