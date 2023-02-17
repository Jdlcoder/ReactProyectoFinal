import { db } from "../../services/firebase";
import { getDoc,doc } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import ItemDetail from '../itemDetail/ItemDetail';

import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([]);

    //Tomamos el parámetro de la URL para identificar el ID del producto
    const { productoId } = useParams();

    useEffect(()=>{
        const getData = async()=>{
            const response = await getDoc(doc(db,"listaProductos",productoId));
            setProductos(<ItemDetail key={response.id} id={response.id} data={{id:response.id, ...response.data()}} />);
        }
        getData();
    },[productoId]);


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