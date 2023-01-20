import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import ItemDetail from '../itemDetail/ItemDetail';

import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([])

    const { productoId } = useParams()

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productoId}`)
    .then(res=>res.json())
    .then(productos => setProductos(<ItemDetail key={productos.id} id={"producto" + productos.id} data={productos} />))
    },[productoId])


    return (
        <section>
            {productos}
            <div className="itemDetailVoler">
                <Link to="/">Volver a mis productos</Link>
            </div>
            
        </section>
    )
}

export default ItemDetailContainer;