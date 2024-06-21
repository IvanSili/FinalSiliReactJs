
const ItemDetail = ({ item }) => {

    return (
        <div>   
            <div className="bg-gray-600 flex items-center flex-col p-5 rounded-md">
            <h2>Titulo: {item.title}</h2>
            <img src={item.image} alt={item.title}/>
            <p>Genero: {item.genres}</p>
            <p>${item.price}.</p>
            <p>Sinopsis: {item.description}</p>
            </div>
        </div>
    )
}

export default ItemDetail
