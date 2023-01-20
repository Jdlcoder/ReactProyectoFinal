import Card from 'react-bootstrap/Card';

import ItemCount from '../itemCount/ItemCount';

import './ItemDetail.css';

const ItemDetail = (props) => {

    //asigno valores de manera aleatoria para mostrar que el boton se deshabilita cuando no hay stock
    const randStockValue = () => {
        return Math.floor(Math.random() * (10));
    }

    const { title, category, description, price, image } = props.data;

    return (
        <div className="itemDetail">
            <Card style={{width:"80%", height:"60%"}}>
                <Card.Header>{category}</Card.Header>
                <Card.Img className="card_detail_img_size" variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text className="fw-bold h3">${price}</Card.Text>
                    <ItemCount stock={randStockValue()} />
                </Card.Body>
            </Card>
            
        </div>
    )
}

export default ItemDetail;