import data from "../data-files/productos.json";


export const requestProduct = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 700)
    })
}

export const requestItemForId = (id) => {
    return new Promise((resolve, reject) => {

        const item = data.find((el) => el.id === id);

        if (item) {
            resolve(item)
        } else {
            reject({error:"No se encontro el producto"})
        }
    })
}

export default requestProduct;
