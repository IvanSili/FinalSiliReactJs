import { useEffect, useState } from "react";
import { requestProduct } from "./RequestProduct.js";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";


function ItemListConteiner(greeting) {

    const [productos, setProductos] = useState([])
    const genres = useParams().genres;


    useEffect (() => {
        requestProduct()
            .then((res) => {
                if (genres) {
                    const filteredProducts = res.filter((movie) =>
                        movie.genres.toLowerCase().includes(genres.toLowerCase())
                    );
                    setProductos(filteredProducts);
                } else {
                    setProductos(res);
                }
            })
    }, [genres])

    return (
        <div className="flex gap-x-10 flex-wrap justify-evenly bg-[#1F4489] ">
            <h1 className="p-10 text-3xl">{greeting.texto}</h1>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListConteiner
