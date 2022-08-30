import React, {useState}  from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import Button from 'react-bootstrap/Button'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import './cart.css'
import ContactForm from "../ContactForm";


const Cart = () => {
    const { cart, totalPrice} = useCartContext();
    const [numero, setNumero] = useState()
    
    const order = {
        items: cart.map((product) => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice()
    }
    
    
    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({ id }) => setNumero(id))
    }

    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to="/">Hacer Compras </Link>
            </>
        );
    };
    
    return (
        <>
        {
            cart.map(product => <ItemCart key={product.id} product={product}></ItemCart>)
        }
        <p>
            total: ${totalPrice()}
        </p>
        <ContactForm/>
        <Button onClick={handleClick}> Generar Orden</Button>
        {
        setNumero ? <div>Id de orden: {numero}</div> : ''
        }
            
        
        </>
    );
};

export default Cart;