import CardProducto from "./CardProducto"
import MensajeInicial from "../ComponentesCompartidos/MensajeInicial"
import AsideFiltros from "./AsideFiltros"
const productos = [
    {
        nombre_corto: "Alpha",
        descripcion: "tiene una unidad Pocket que permite que el descanso suba a un nivel inigualable en comparación con las unidades de resortes normales",
        precio: 598,
        precio_falso: 839
    },
    {
        nombre_corto: "Iris",
        descripcion: "Tiene una unidad Pocket que permite que el descanso suba a un nivel inigualable en comparación con las unidades de resortes normales",
        precio: 629,
        precio_falso: 1256
    }
]

export default function Productos() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 mt-3">
                    <AsideFiltros />
                </div>
                <div className="col">
                    <MensajeInicial />
                    <div className="d-flex flex-row ">
                        {productos.map((item) => <CardProducto item={item} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

