import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {collection, getFirestore, addDoc } from 'firebase/firestore';


const ContactForm = () => {
    const [form, setForm] = useState({
        email: "",
        name: "",
        address: "",
        phone: ""
    });

const changeHandler = (ev) => {

    const {value, name} = ev.target;
    setForm({...form, [name]: value});
}

const submitHandler = (ev) => {
    ev.preventDefault();
    console.log(form);

    const db =  getFirestore();
    const contactFormCollection = collection(db, "contactform");
    addDoc(contactFormCollection, form).then(snapshot => console.log(snapshot));
}

    return (
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" value= {form.email} onChange={changeHandler}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre y apellido</Form.Label>
                <Form.Control type="Name" name="name" placeholder="Name" value= {form.name} onChange={changeHandler}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="address">
                <Form.Label>direccion</Form.Label>
                <Form.Control type="address" name="address" placeholder="Address"value= {form.address} onChange={changeHandler}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
                <Form.Label>telefono</Form.Label>
                <Form.Control type="phone" name="phone" placeholder="Phone" value= {form.phone} onChange={changeHandler}/>
            </Form.Group>
            <Button variant="primary" type="submit">
        Enviar
        </Button>
        </Form>
    )
}

export default ContactForm;