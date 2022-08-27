import React, {useState} from "react";
import {Link} from "react-router-dom"
import { useCartContext } from "../../context/CartContext";
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount"
import Button from 'react-bootstrap/Button'
import "../ItemDetail/itemDetail.css"


export const ItemDetail = ({ data }) => {

    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity)
    };


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                    Excelente crema
                </Card.Text>
                
                {
                    goToCart ? <Button> <Link className= "comprar" to="/cart">Terminar compra</Link> </Button>   : <ItemCount variant="primary" initial={1} stock={5} onAdd={onAdd} />
                }
            </Card.Body>
        </Card>
    );
};

export default ItemDetail;