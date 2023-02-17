import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import ItemDetail from '../itemDetail/ItemDetail';
import {items,getQueryItemsFilteredId} from '../../services/firebase'
import {db} from "../../services/firebase";
import { collection, getDocs, query, where ,getDoc,doc} from "firebase/firestore";


import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([])

    const { productoId } = useParams()

    useEffect(()=>{
        const getData = async()=>{
            
            const response = await getDoc(doc(db,"listaProductos",productoId))
            console.log(`ItemDetailContainer: id ${response.id}`)
            // setProductos(<ItemDetail key={response.id} id={"producto" + response.id} data={response.data()} />)
            setProductos(<ItemDetail key={response.id} id={response.id} data={{id:response.id, ...response.data()}} />)
        
        }
        getData();
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