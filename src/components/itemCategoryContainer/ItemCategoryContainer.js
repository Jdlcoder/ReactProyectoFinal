import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Item from '../item/Item';

import './ItemCategoryContainer.css';

const ItemCategoryContainer = () => {
    const [productos, setProductos] = useState([])

    const { categoryIdParam } = useParams()
    let categoryId = ''

    //Como tengo nombres de categorias con espacios hago este mapeo
    switch (categoryIdParam) {
        case 'mens_clothing':
            categoryId = "men's clothing"
            break;
        case 'womens_clothing':
            categoryId = "women's clothing"
            break;
        default:
            categoryId = categoryIdParam
            break;
    }

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
            .then(res => res.json())
            .then(json => setProductos(json.map(productos => <Col md={4} sm={12} key={productos.id}><Item key={productos.id} id={"producto" + productos.id} data={productos} /></Col>)))
    }, [categoryId])


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