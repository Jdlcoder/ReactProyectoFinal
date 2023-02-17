import { useState } from 'react';
import { Button } from 'react-bootstrap';

import './ItemCount.css';

const ItemCount = (props) => {

  const [contador, setContador] = useState(1);

  // De no haber stock el click no debe tener efecto y por ende no ejecutar el callback onAdd.
  let classDisableButton = 'dark';
  if (props.stock === 0) {
    classDisableButton = 'dark disabled';
  }

  //Si el producto no esta en el carrito, no deberia aparecer habilitado el boton
  let classDisableRemoveButton ='dark';
  if (! props.showRemoveButton)
     classDisableRemoveButton ='dark disabled';

  //Metodo que actúal al seleccionar la opción + de agregar productos
  const onIncr = () => {
    //El número contador nunca puede superar el stock disponible.
    if (contador < props.stock) {
      setContador(contador + 1);
    }
  }

  //Metodo que actúal al seleccionar la opción - de elegir menos productos
  const onDecr = () => {
    //Disminuyo como máximo hasta cero
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  //Método que actúal al hacer clic sobre el botón Agregar al carrito
  const onAdd = () => {
    // De no haber stock el click no debe tener efecto y por ende no ejecutar el callback onAdd.
    if (contador === 0 ){
      alert(`No seleccionó ningún elemento para agregar al carrito`);
    } else if (props.stock !== 0) {
      alert(`Se agregaron ${contador} productos al carrito`);
      props.setCountItems(contador);
    }
  }

  //Método para eliminar un producto del carrito
  const onSupr = () => {
    props.removeItemCart();
    alert(`El producto ${props.title} se removió del carrito`);
  }

  return (

    <div className='itemCount'>
      <div>
        <Button variant="outline-info" onClick={onIncr}>+</Button>
        {contador}
        <Button variant="outline-info" onClick={onDecr}>-</Button>
      </div>
      <div className='itemCountOnAdd'>
        <Button variant={classDisableButton} onClick={onAdd}>Agregar al carrito</Button>
      </div>
      <div>
        <Button className="btnRemove" variant={classDisableRemoveButton} onClick={onSupr}>Quitar del carrito</Button>
      </div>
    </div>
  )
}

export default ItemCount;