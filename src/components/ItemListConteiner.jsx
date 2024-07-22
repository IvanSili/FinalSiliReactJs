import { useEffect, useState } from "react";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/fireBaseConfig.js";

function ItemListConteiner(greeting) {

    const [productos, setProductos] = useState([])

    const genre = useParams().genre;


    useEffect (() => {
        const productosRef = collection(db, "productos");

        const qu = genre ? query(productosRef, where("genre", "==", genre)) : productosRef

        getDocs(qu)
        .then((resp) => {
            setProductos(
                resp.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id,};
                })
            )
        })
    }, [genre])

    return (
        <div className="flex gap-x-10 flex-wrap justify-evenly bg-[#b5b5b5] ">
            <h1 className="p-10 text-3xl">{greeting.texto}</h1>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListConteiner
