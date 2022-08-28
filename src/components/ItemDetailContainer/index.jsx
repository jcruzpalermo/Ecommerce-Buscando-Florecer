import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";

// Traer el servicio de firestore
//Crear un puntero al dato que queremos traer
// traer el dato con una promesa


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'Productos', detalleId);
        getDoc(queryDoc)
        .then((res) => setData({id: res.id, ...res.data()}));
    }, [detalleId])

    return (
        <ItemDetail data={data} />
    );
};

export default ItemDetailContainer;