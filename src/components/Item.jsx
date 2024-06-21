import { Link } from "react-router-dom"

const Item = ({producto}) => {
    return (
        <div className="bg-gray-600 flex items-center flex-col p-5 rounded-md h-70 w-60">
            <h2>{producto.title}</h2>
            <img className="size" src={producto.image} alt={producto.title}/>
            <p>{producto.genres}</p>
            <p>$ {producto.price}</p>
            <Link className="bg-[#FCC139] p-3 rounded hover:text-[#1F4489] font-bold" to={`/item/${producto.id}`}>Ver Mas</Link>
        </div>
    )
}

export default Item


