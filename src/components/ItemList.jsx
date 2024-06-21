import Item from "./Item.jsx"

function ItemList({ productos }) {
    return (
        <div className="flex flex-wrap  gap-10 justify-evenly">
            {productos.map((producto) => {
                return (
                    <Item key={producto.id} producto={producto} />
                )
            })
            }
        </div>
    )
}

export default ItemList
