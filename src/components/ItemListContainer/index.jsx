import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import './itemListContainer.css';
import ItemList from "../ItemList";
import Title from "../Title";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Traer el servicio de firestore
//Crear un puntero al dato que queremos traer
// traer el dato con una promesa


export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'Productos');
        if (categoriaId) {
            const queryFilter = query(queryCollection, where("category", "==", categoriaId),
            );
            getDocs(queryFilter)
                .then((res) => setData(res.docs.map((productos) => ({ id: productos.id, ...productos.data() })),
                ),
                );
        } else {
            getDocs(queryCollection)
                .then((res) => setData(res.docs.map((productos) => ({ id: productos.id, ...productos.data() })),
                ),
                );
        }
    }, [categoriaId]);



    return (
        <>
            <Container fluid>
                <Row >
                        <Title greeting={texto} />
                        <ItemList data={data} />
                </Row>
            </Container>

        </>
    );
};

export default ItemListContainer;
