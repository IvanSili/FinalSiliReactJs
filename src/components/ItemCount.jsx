const ItemCount = ( {cantidad, handleSumar, handleRest, handleAgregar} ) => {

    return (
        <div>
            <div className='flex gap-2 items-center mt-9'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleRest}>-</button>
            <p>{cantidad}</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleSumar}>+</button>
            </div>
        <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-3' onClick={handleAgregar}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
