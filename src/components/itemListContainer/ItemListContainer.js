import ItemList from '../itemList/ItemList';

import './ItemListContainer.css';

const ItemListContainer = (props) => {
    return (
        <div>
            <p>{props.greeting}</p>
            <ItemList />
        </div>

    )
}

export default ItemListContainer;