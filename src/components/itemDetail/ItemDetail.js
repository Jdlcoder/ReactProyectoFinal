import {CartProvider,useCartContext} from '../../context/CartContext'
import Card from 'react-bootstrap/Card';

import ItemCount from '../itemCount/ItemCount';

import './ItemDetail.css';
import react from 'react';

const ItemDetail = (props) => {
    const  {addItemCart,removeItemCart,isInCart} = useCartContext()

    if (props.data) {

    //asigno valores de manera aleatoria para mostrar que el boton se deshabilita cuando no hay stock
    const randStockValue = () => {
        // return Math.floor(Math.random() * (10));
        return 10
    }
    const { id, title, category, description, price, image } = props.data;

    

    const setCountItems = (count) => {

        const newItem = { 
            id:id,
            title:title, 
            category:category, 
            description:description, 
            price:price, 
            image:image,
            count:count 
        }
        console.log("ItemCOunt . newItem", newItem)
        addItemCart(newItem)
    }

    const removeItem = () => {
        removeItemCart(id)
    }

    
    return (
        <div className="itemDetail">
            <Card style={{width:"80%", height:"60%"}}>
                <Card.Header>{category}</Card.Header>
                <Card.Img className="card_detail_img_size" variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text className="fw-bold h3">${price}</Card.Text>
                    <ItemCount stock={randStockValue()} setCountItems={setCountItems} removeItemCart={removeItem} title={title} showRemoveButton={(isInCart(id)) ? true:false }/>
                </Card.Body>
            </Card>
            
        </div>
    )
    } else {
        return (
            <div className="itemDetail">
              <h3 className="itemDetailH3">No se encontraron productos que coincidan con ese id</h3>
            </div>
        )   
    }
}

export default ItemDetail;