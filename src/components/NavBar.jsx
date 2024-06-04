import CartWidget from "./CartWidget"

function NavBar() {
    return (
        <>
        <h1>Libreria Odisea</h1>
            <nav>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Categorias</a></li>
                <li><a href="#">Contacto</a></li>
            </nav>
            <div>
                ­<CartWidget/>   
            </div>
        </>
    )
}

export default NavBar
