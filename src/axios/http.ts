import axios, { isCancel, AxiosError } from 'axios';

// Crea una instancia de Axios con la URL base
const api = axios.create({
    baseURL: 'http://localhost:3000/api/',
});

// Usa la instancia para realizar peticione

export function getProductos() {
    api.get('/productos')
        .then((res) => {
            console.log(res)
            return res
        })
        .catch((error) => { return error })
}
export async function getCategoriaDelProducto() {
    try {
        const res = await api.get('/productos/categorias');
        return res.data;
    } catch (error) {
        throw error;
    }
}

export function CreateProduct(data: any) {
    api.post('/productos', data)
        .then((res) => {
            // console.log(res)
            return res.status
        })
        .catch((error) => { return error })
}