import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Item from '../item/Item'

import './ItemList.css'

const ItemList = (props) => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProductos(json.map(productos => <Col md={4} sm={12} key={productos.id}><Item key={productos.id} id={"producto" + productos.id} data={productos} /></Col>)))

  }, [])

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