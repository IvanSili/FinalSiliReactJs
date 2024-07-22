import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';


const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div>
            <h1>CARRITO</h1>
            {
                carrito.map((prod) => {
                    return (
                        <div key={prod.id}>
                            <h2>{prod.title}</h2>
                            <p>Precio unitario: ${prod.price}</p>
                            <p>Precio total: ${prod.price * prod.cantidad}</p>
                            <p>Cantidad: {prod.cantidad}</p>
                        </div>
                    );
                })
            }
            {
            carrito.length > 0 ?
            <> 
            <h2>Precio Total: ${precioTotal()}</h2>
            <button onClick={handleVaciar}> Vaciar</button>
            <Link to="/checkout">Comprar</Link>
            </>
            : <h2>El carrito esta vacio</h2>
        }
        </div>
    )
}

export default Carrito