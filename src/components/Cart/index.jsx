import React from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import Button from 'react-bootstrap/Button'
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
    const { cart, totalPrice } = useCartContext();
    
    const order = {
        buyer: {
            name: 'Jorge',
            email: 'Jorge@gmail.com',
            telefono: '2211378990',
            direccion: '6 y 507'
        },
        items: cart.map((product) => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id))
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
        <Button onClick={handleClick}>Generar Orden</Button>
        </>
    );
};

export default Cart;