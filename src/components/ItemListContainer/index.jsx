import React, { useEffect, useState } from "react";
import './itemListContainer.css';
import ItemList from "../ItemList";
import Title from "../Title";
import { useParams } from "react-router-dom";


const productos = [
        {id: 1, price: 500, image: "https://i0.wp.com/vegantown.com.ar/wp-content/uploads/2021/07/Acondicionador-Solido.jpg?w=1000&ssl=1", category:"cuidadoPersonal", title: "Acondicionador"},
        {id: 2, price: 700, image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/018/645/products/jabones1024x10241-e461342bcdec09fa3816450215000575-480-0.jpg", category:"cuidadoPersonal" , title: "Jabon"},
        {id: 3, price: 900, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYuVo-fVQJYkGh0iOcIVovJsA6DNk1ks5NITpcGgVvsR7O1Eve1h3xPSXhIzP2vcYuyw&usqp=CAU", category:"cuidadoPersonal", title: "Crema"},
        {id: 4, price: 500, image: "https://d22fxaf9t8d39k.cloudfront.net/0d7177b9220605944a361baed7d1e16ca9212ab4da14ecde57a026834bbdb042105127.jpeg", category:"limpieza", title: "Limpiador"},
        {id: 5, price: 400, image: "https://d22fxaf9t8d39k.cloudfront.net/dedd414ef44cb82f47883782e0f0a2b54756a5d92f8e3b53a903b36b2d871ee7105127.jpeg", category:"limpieza", title: "Detergente"},
        {id: 6, price: 200, image: "https://d22fxaf9t8d39k.cloudfront.net/eab53302522c308dee044491c9c09d5c3a422b359eb07f1e2c983f7702b0449f105127.jpeg", category:"limpieza", title: "Esponja"},
    ];




export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]); 

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 1000);
        });
        if (categoriaId) {
            getData.then((res) => setData(res.filter((cuidadoPersonal) => cuidadoPersonal.category === categoriaId)),
            );
        }else {
        getData.then((res) => setData(res));
        }
    }, [categoriaId]);



    return (
        <>
        <Title greeting={texto}/>
        <ItemList data={data} className="itemList"/>
        </>
    );
};

export default ItemListContainer;
