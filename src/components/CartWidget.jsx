import { Link } from "react-router-dom"
import React, { useContext } from 'react'
import { CartContext } from "../context/CartContext"

const CartWidget = () => {

const { cantidadEnCarrito } = useContext(CartContext);

const cantidad = cantidadEnCarrito();
const cantidadValida = isNaN(cantidad) ? 0 : cantidad;

    return (
        <div className="flex">
            <Link className="hover:text-[#FCC139] p-2 hover:uppercase" to="/carrito">            
            <img src="/image/carrito.png" alt="carrito" />
            <span>{cantidadValida}</span>
            </Link>
        </div>
    )
}

export default CartWidget
