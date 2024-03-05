
import CardProducto from "../Productos/CardProducto"
// import MensajeInicial from "../ComponentesCompartidos/MensajeInicial"
import MensajeInicialAdmin from "../ComponentesCompartidos/MensajeInicialAdmin"
import AsideFiltros from "../Productos/AsideFiltros"
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
    },
    {
        nombre_corto: "Remedy",
        descripcion: "Tiene una unidad Pocket que permite que el descanso suba a un nivel inigualable en comparación con las unidades de resortes normales",
        precio: 629,
        precio_falso: 1256
    },
    {
        nombre_corto: "Iris",
        descripcion: "Tiene una unidad Pocket que permite que el descanso suba a un nivel inigualable en comparación con las unidades de resortes normales",
        precio: 629,
        precio_falso: 1256
    },
    {
        nombre_corto: "Iris",
        descripcion: "Tiene una unidad Pocket que permite que el descanso suba a un nivel inigualable en comparación con las unidades de resortes normales",
        precio: 629,
        precio_falso: 1256
    },
    {
        nombre_corto: "Remedy",
        descripcion: "Tiene una unidad Pocket que permite que el descanso suba a un nivel inigualable en comparación con las unidades de resortes normales",
        precio: 629,
        precio_falso: 1256
    },
    {
        nombre_corto: "Iris",
        descripcion: "Tiene una unidad Pocket que permite que el descanso suba a un nivel inigualable en comparación con las unidades de resortes normales",
        precio: 629,
        precio_falso: 1256
    },

]

export default function ProductosAdmin() {
    


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 mt-3">
                    <AsideFiltros />
                </div>
                <div className="col">
                    {/* <MensajeInicial /> */}
                    <MensajeInicialAdmin />
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                        {productos.map((item, index) => (
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
