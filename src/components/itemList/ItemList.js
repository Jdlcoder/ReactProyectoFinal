import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { collection, getDocs, query, where } from "firebase/firestore";


import {items} from '../../services/firebase'

import Item from '../item/Item'
import {db} from "../../services/firebase";

import './ItemList.css'

const ItemList = (props) => {
  

  const [productos, setProductos] = useState([]);
  const [lista, setLista] = useState([])

  useEffect(()=>{
    const getData = async()=>{
        //1.Creamos una consulta que vamos a realizar a la base de datos
        // const queryRef = tipoProducto ? query(collection(db,"listaProductos") , where("category","==",tipoProducto)) : collection(db,"listaProductos");
        const queryRef =  collection(db,"listaProductos");
        //2.Hacer la consulta
        const response = await getDocs(queryRef);
        const docsInfo = response.docs.map(doc=>{
            const newDoc = {
                id:doc.id,
                ...doc.data()
            }
            return newDoc
        });
        console.log("docsInfo",docsInfo);
        setProductos(docsInfo.map(
          productos => <Col md={4} sm={12} key={productos.id}><Item key={productos.id} id={"producto" + productos.id} data={productos} /></Col>
        ));
        // console.log("doc",response.docs[0]);
        // console.log("data",response.docs[0].data());
        // const newDoc = {
        //     id:response.docs[0].id,
        //     ...response.docs[0].data()
        // }
        // console.log(newDoc)
    }
    getData();
},[])
  
  
  

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then(res => res.json())
  //     .then(json => setProductos(
  //         json.map(productos => <Col md={4} sm={12} key={productos.id}><Item key={productos.id} id={"producto" + productos.id} data={productos} /></Col>
          
  //             )
          
          
  //         )
        
  //     )

  // }, [])


  
  return (
    <div className="itemList">
      <Container >
        <Row>
          {productos}
        </Row>
      </Container>
      
    </div>
  )

}

export default ItemList