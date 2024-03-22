import axios from 'axios';

// Crea una instancia de Axios con la URL base
const api = axios.create({
    baseURL: 'http://localhost:3000/api/',
});

// Usa la instancia para realizar peticione

export async function getProductos() {
    try{
        const res= await api.get('/productos')
        return res.data
    }
    catch(error){
        return error
    }
}
export async function getCategoriaDelProducto() {
    try {
        const res = await api.get('/productos/categorias');
        return res.data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export async function CreateProduct(data: any){
    try {
        const res = await api.post('/productos', data);
        return res;
    } catch (error) {
        console.log(error)
        throw error;
    }
}
