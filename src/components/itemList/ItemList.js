import { Container, Row, Col } from 'react-bootstrap';

import Item from '../item/Item';

import './ItemList.css';

const ItemList = ({items}) => {

  return (
    <div className="itemList">
      <Container >
        <Row>
          {items.map(productos => <Col md={4} sm={12} key={productos.id}><Item key={productos.id} id={"producto" + productos.id} data={productos} /></Col>)}
        </Row>
      </Container>
    </div>
  )
}

export default ItemList;