import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount"

export const ItemDetail = ({data}) => {

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    };


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                    Excelente crema
                </Card.Text>
                
                <Button variant="primary"><ItemCount initial={1} stock={5} onAdd={onAdd} /></Button>
            </Card.Body>
        </Card>
    );
};

export default ItemDetail;