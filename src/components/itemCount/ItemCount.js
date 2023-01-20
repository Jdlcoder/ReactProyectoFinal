import { useState } from 'react'
import { Button } from 'react-bootstrap'

import './ItemCount.css'

const ItemCount = (props) => {

  const [contador, setContador] = useState(0)

  // De no haber stock el click no debe tener efecto y por ende no ejecutar el callback onAdd.
  let classDisableButton = 'dark'
  if (props.stock === 0) {
    classDisableButton = 'dark disabled';
  }

  const onIncr = () => {
    //El número contador nunca puede superar el stock disponible.
    if (contador < props.stock) {
      setContador(contador + 1)
    }
  }

  const onDecr = () => {
    //Su
    if (contador > 0) {
      setContador(contador - 1)
    }
  }

  const onAdd = () => {
    // De no haber stock el click no debe tener efecto y por ende no ejecutar el callback onAdd.
    if (contador === 0 ){
      alert(`No seleccionó ningún elemento para agregar al carrito`)
    } else if (props.stock !== 0) {
      alert(`Se agregaron ${contador} productos al carrito`)
    }

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
    </div>


  )

}

export default ItemCount