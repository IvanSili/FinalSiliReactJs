import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext"

const ItemDetail = ({ item }) => {

const { carrito, agregarAlCarrito } = useContext(CartContext);

const [cantidad, setCantidad] = useState (1)

const handleRest = () => { 
    cantidad > 1 && setCantidad (cantidad - 1)
}
const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1)

}


    return (
        <div className="grid grid-cols-2 ">
            <img className="size-full p-8" src={item.image} alt={item.title} />
            <div className="grid place-content-center p-8 ">
                <div className="bg-white text-black flex items-start flex-col p-5 rounded-md">
                    <h2>Titulo: {item.title}</h2>
                    <p>Genero: {item.genres}</p>
                    <p>${item.price}.</p>
                    <p>Sinopsis: {item.description}</p>
                    <ItemCount 
                    cantidad={cantidad} 
                    handleRest={handleRest} 
                    handleSumar={handleSumar} 
                    handleAgregar={() => {agregarAlCarrito(item, cantidad)}}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
