import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import './Item.css'


const Item = (props) => {
  const { title, category, price, id, image } = props.data;

  return (
    <div className='item_card'>
      <Card style={{ width: '25rem' }}>
        <Card.Header>{category}</Card.Header>
        <Card.Img className="card_img_size" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="fw-bold h3">${price}</Card.Text>
          <Button variant="info" as={Link} to={`/item/${id}`}>Ver detalles</Button>
        </Card.Body>
      </Card>
    </div>
  )

}

export default Item;