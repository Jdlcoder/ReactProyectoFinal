import {useCartContext} from '../../context/CartContext';

import { Table } from 'react-bootstrap';

const CartTable = ({items}) => {

    //Contexto
    const  {removeItemCart} = useCartContext();

    //función para remover un item del carrito por su id
    const removeItem = (id) => {
        removeItemCart(id);
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
        </div>
    )
}

export default CartTable;