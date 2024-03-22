
import CardProducto from "../Productos/CardProducto"
// import MensajeInicial from "../ComponentesCompartidos/MensajeInicial"
import MensajeInicialAdmin from "../ComponentesCompartidos/MensajeInicialAdmin"
import AsideFiltros from "../Productos/AsideFiltros"
import Acciones from "./Acciones"
import { getProductos } from "../../axios/http"
const productos = await  getProductos()

export default function ProductosAdmin() {
    


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 mt-3">
                    <Acciones />
                    <AsideFiltros  />
                    
                </div>
                <div className="col">
                    {/* <MensajeInicial /> */}
                    
                    <MensajeInicialAdmin />
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                        {productos.map((item:any, index:number) => (
                            <div className="col mb-4" key={index}>
                                <CardProducto item={item} index={index} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
