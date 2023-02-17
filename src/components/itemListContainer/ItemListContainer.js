import { db } from "../../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ItemList from '../itemList/ItemList';

import './ItemListContainer.css';

const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([]);
  const { categoryIdParam } = useParams();

  useEffect(()=>{
    const getData = async()=>{
        // Reutilizamos este componente para cuando hay que mostrar todos y también cuando hay que mostrar sólo los de una categoría específica
        const queryRef =  categoryIdParam ? query(collection(db,"listaProductos") , where("category","==",categoryIdParam)) : collection(db,"listaProductos");

        //Hacemos la consulta a firestore y creamos un objeto al cual le sumamos el id para que quede compatible con lo que tenemos armado
        const response = await getDocs(queryRef);
        const docsInfo = response.docs.map(doc=>{
            const newDoc = {
                id:doc.id,
                ...doc.data()
            }
            return newDoc
        });
        
        setProductos(docsInfo);
    }
        getData();
    },[categoryIdParam]);
  
    return (
        <div>
            <ItemList items={productos}/>
        </div>
    )
}

export default ItemListContainer;