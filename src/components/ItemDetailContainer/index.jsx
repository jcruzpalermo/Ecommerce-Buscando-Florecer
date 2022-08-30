import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";
import Cargando from "../Spinner";
// Traer el servicio de firestore
//Crear un puntero al dato que queremos traer
// traer el dato con una promesa


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'Productos', detalleId);
        

        setIsLoading(true);

        getDoc(queryDoc).then((res) => {
            setIsLoading(false)
            setData({id: res.id, ...res.data()})});
    }, [detalleId])

    return (
        <>
            {isLoading ? <Cargando/> : <ItemDetail data={data} />}
        </>
    );
};

export default ItemDetailContainer;