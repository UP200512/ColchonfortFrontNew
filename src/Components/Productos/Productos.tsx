import CardProducto from "./CardProducto"
import MensajeInicial from "../ComponentesCompartidos/MensajeInicial"
import AsideFiltros from "./AsideFiltros"
import Product_Level1 from "./Product_Level1"
import { getProductos } from "../../axios/http"
const productos = await  getProductos()

export default function Productos() {
    return (
        <div className="container" >
            <div className="row">
                {/* <div className="col-md-3 mt-3">
                    <AsideFiltros />
                </div> */}
                <Product_Level1 />
                <div className="col">
                    <MensajeInicial />
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
                        {productos.map((item: any, index: number) => (
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

