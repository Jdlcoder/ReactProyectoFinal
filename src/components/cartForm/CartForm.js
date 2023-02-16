import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react'

import './CartForm.css'

function CartForm(props) {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email,setEmail] = useState('')
    const [done, setDone] = useState(false)

    const checkEmailConfirm = (e) => {
        if (email !== e) 
            alert("Los mails ingresados no coinciden. Verifique y vuelva a intentar")
    }

    const isSubmitDisabled = ( !name && !surname && !email ) || done;
    const checkOrder = () => {
        setDone(true)
        props.sendOrder({name:name, surname:surname, email:email})
    }

  return (
      <div>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingreso tu nombre" required onChange={(e) => setName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSurname">
            <Form.Label>Surname</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu apellido" required onChange={(e) => setSurname(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingresar tu email" onChange={(e) => setEmail(e.target.value)}/>
            <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasiceEmailConfirm" >
            <Form.Label>Confirmación email</Form.Label>
            <Form.Control type="email" placeholder="Vuelva a ingresar email" onBlur={(e) => checkEmailConfirm(e.target.value)} />
            <Form.Text className="text-muted"></Form.Text>
        </Form.Group>


        </Form>
        <Button variant="dark" type="submit" onClick={checkOrder} disabled={isSubmitDisabled}>Confirmar Compra</Button>
        <Button className="clearCart" variant={'dark'} onClick={props.clearCart}>Vaciar carrito</Button>
      </div>
  );
}

export default CartForm;