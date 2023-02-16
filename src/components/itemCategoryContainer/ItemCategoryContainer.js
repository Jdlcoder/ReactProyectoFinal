import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {items,getQueryItemsFilteredId} from '../../services/firebase'
import {db} from "../../services/firebase";
import { collection, getDocs, query, where ,getDoc,doc} from "firebase/firestore";

import Item from '../item/Item';

import './ItemCategoryContainer.css';

const ItemCategoryContainer = () => {
    const [productos, setProductos] = useState([])

    const { categoryIdParam } = useParams()
    // let categoryId = ''

    // //Como tengo nombres de categorias con espacios hago este mapeo
    // switch (categoryIdParam) {
    //     case 'mens_clothing':
    //         categoryId = "  "
    //         break;
    //     case 'womens_clothing':
    //         categoryId = "women's clothing"
    //         break;
    //     default:
    //         categoryId = categoryIdParam
    //         break;
    // }

    // useEffect(() => {
    //     fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
    //         .then(res => res.json())
    //         .then(json => setProductos(json.map(productos => <Col md={4} sm={12} key={productos.id}><Item key={productos.id} id={"producto" + productos.id} data={productos} /></Col>)))
    // }, [categoryId])

    useEffect(()=>{
        const getData = async()=>{
            //1.Creamos una consulta que vamos a realizar a la base de datos
            const queryRef = query(collection(db,"listaProductos") , where("category","==",categoryIdParam))
            //2.Hacer la consulta
            const response = await getDocs(queryRef);
            console.log("Categoryyyyyyy")
            const docsInfo = response.docs.map(doc=>{
                const newDoc = {
                    id:doc.id,
                    ...doc.data()
                }
                return newDoc
            });
            // console.log(docsInfo);
                //         .then(json => setProductos(json.map(productos => <Col md={4} sm={12} key={productos.id}><Item key={productos.id} id={"producto" + productos.id} data={productos} /></Col>)))

            // setProductos(docsInfo);

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
    },[categoryIdParam])
    

    return (
        <section className="categoryList">
            <Container >
                <Row>
                    {productos}
                </Row>
            </Container>
            <Link to="/">Volver a mis productos</Link>
        </section>
    )
}

export default ItemCategoryContainer;