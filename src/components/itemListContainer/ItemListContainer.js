import './ItemListContainer.css';

const ItemListContainer = (props) => {
    return (
        <p className='item__greetings'>Este es el saludo: {props.greeting}</p>
    )
}

export default ItemListContainer;