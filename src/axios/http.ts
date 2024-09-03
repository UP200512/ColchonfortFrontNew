import axios from 'axios';
import { HiWindow } from 'react-icons/hi2';

// Crea una instancia de Axios con la URL base
const api = axios.create({
    baseURL: 'http://localhost:3000/api/',
});

// Usa la instancia para realizar peticione

export async function getProductos() {
    try {
        const res = await api.get('/productos')
        return res.data
    }
    catch (error) {
        return error
    }
}
export async function getProducto(id:any) {
    try {
        const res = await api.get(`/productos/${id}`)
        return res.data
    }
    catch (error) {
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

export async function CreateProduct(data: any) {
    try {
        const res = await api.post('/productos', data);
        window.location.href = "/productos/administrar/images/" + res.data.insertId
        return res;
    } catch (error) {
        console.log(error)
        throw error;
    }
}
export async function EditProduct(data: any, id:any) {
    try {
        const res = await api.patch('/productos/' + id, data);
        console.log(res.data)
        window.location.href = "/productos/administrar/"
        return res;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export async function DeleteProduct(id:any) {
    if(confirm("Desea eliminar este producto?")){
        try {
            const res = await api.delete('/productos/' + id);
            console.log(res.data)
            window.location.href = "/productos/administrar/"
            return res;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
    
}







export async function Acceder(data: any) {
    try {
        const res = await api.post('/login', data)


        // setData(data)
        console.log(res.data)
        if (res.data.auth) {

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('tipo', res.data.tipo);
            window.location.href = '/'


        } else {
            alert("Credenciales incorrectas!");
            return false
        }


    } catch (error) {
        console.log(error)
    }


} 


export async function CreateUser(data: any) {
    try {
        const res = await api.post('/usuarios', data);
        if(res.status===200){
            window.location.href = "/"
        }else if(res.data.message=="repetido"){
            alert("Error: este correo ya está en uso")
        } 
        
        return res;
    } catch (error) {
        console.log(error)
        throw error;
    }
}


