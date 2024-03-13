import CardProducto from "./CardProducto"
import MensajeInicial from "../ComponentesCompartidos/MensajeInicial"
import AsideFiltros from "./AsideFiltros"
import Product_Level1 from "./Product_Level1"
 export const productos = [
    {
        nombre_corto: "Alpha",
        descripcion: "Tiene una unidad Pocket que permite que el descanso suba a un nivel inigualable",
        descripcion_larga: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sed placeat natus facilis autem quisquam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nulla voluptates ipsa facere, maiores nostrum nesciunt natus quod voluptatibus ex odit saepe. Aut, aperiam hic omnis, obcaecati vitae, et harum non sapiente maiores amet quidem magnam mollitia numquam ipsum quisquam vero veritatis. Minima eveniet ratione, natus placeat magni labore necessitatibus tempore nemo fugit amet corrupti nihil corporis obcaecati tempora possimus.",
        precio: 598,
        precio_falso: 839
    },
    {
        nombre_corto: "Iris",
        descripcion: "Tiene una unidad Pocket que permite que el descanso suba a un nivel inigualable en comparación con las unidades de resortes normales",
        descripcion_larga: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sed placeat natus facilis autem quisquam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nulla voluptates ipsa facere, maiores nostrum nesciunt natus quod voluptatibus ex odit saepe. Aut, aperiam hic omnis, obcaecati vitae, et harum non sapiente maiores amet quidem magnam mollitia numquam ipsum quisquam vero veritatis. Minima eveniet ratione, natus placeat magni labore necessitatibus tempore nemo fugit amet corrupti nihil corporis obcaecati tempora possimus.",
        precio: 629,
        precio_falso: 1256
    },
    {
        nombre_corto: "Remedy",
        descripcion: "Tiene una unidad Pocket que permite que el descanso suba a un nivel inigualable en comparación con las unidades de resortes normales",
        descripcion_larga: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sed placeat natus facilis autem quisquam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nulla voluptates ipsa facere, maiores nostrum nesciunt natus quod voluptatibus ex odit saepe. Aut, aperiam hic omnis, obcaecati vitae, et harum non sapiente maiores amet quidem magnam mollitia numquam ipsum quisquam vero veritatis. Minima eveniet ratione, natus placeat magni labore necessitatibus tempore nemo fugit amet corrupti nihil corporis obcaecati tempora possimus.",
        precio: 629,
        precio_falso: 1256
    },
    {
        nombre_corto: "Iris",
        descripcion: "Tiene una unidad Pocket que permite que el descanso suba a un nivel inigualable en comparación con las unidades de resortes normales",
        descripcion_larga: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sed placeat natus facilis autem quisquam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nulla voluptates ipsa facere, maiores nostrum nesciunt natus quod voluptatibus ex odit saepe. Aut, aperiam hic omnis, obcaecati vitae, et harum non sapiente maiores amet quidem magnam mollitia numquam ipsum quisquam vero veritatis. Minima eveniet ratione, natus placeat magni labore necessitatibus tempore nemo fugit amet corrupti nihil corporis obcaecati tempora possimus.",
        precio: 629,
        precio_falso: 1256
    },
    {
        nombre_corto: "Iris",
        descripcion: "Tiene una unidad Pocket que permite que el descanso suba a un nivel inigualable en comparación con las unidades de resortes normales",
        descripcion_larga: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sed placeat natus facilis autem quisquam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nulla voluptates ipsa facere, maiores nostrum nesciunt natus quod voluptatibus ex odit saepe. Aut, aperiam hic omnis, obcaecati vitae, et harum non sapiente maiores amet quidem magnam mollitia numquam ipsum quisquam vero veritatis. Minima eveniet ratione, natus placeat magni labore necessitatibus tempore nemo fugit amet corrupti nihil corporis obcaecati tempora possimus.",
        precio: 629,
        precio_falso: 1256
    },
    {
        nombre_corto: "Remedy",
        descripcion: "Tiene una unidad Pocket que permite que el descanso suba a un nivel inigualable en comparación con las unidades de resortes normales",
        descripcion_larga: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sed placeat natus facilis autem quisquam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nulla voluptates ipsa facere, maiores nostrum nesciunt natus quod voluptatibus ex odit saepe. Aut, aperiam hic omnis, obcaecati vitae, et harum non sapiente maiores amet quidem magnam mollitia numquam ipsum quisquam vero veritatis. Minima eveniet ratione, natus placeat magni labore necessitatibus tempore nemo fugit amet corrupti nihil corporis obcaecati tempora possimus.",
        precio: 629,
        precio_falso: 1256
    },
    {
        nombre_corto: "Iris",
        descripcion: "Tiene una unidad Pocket que permite que el descanso suba a un nivel inigualable en comparación con las unidades de resortes normales",
        descripcion_larga: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sed placeat natus facilis autem quisquam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nulla voluptates ipsa facere, maiores nostrum nesciunt natus quod voluptatibus ex odit saepe. Aut, aperiam hic omnis, obcaecati vitae, et harum non sapiente maiores amet quidem magnam mollitia numquam ipsum quisquam vero veritatis. Minima eveniet ratione, natus placeat magni labore necessitatibus tempore nemo fugit amet corrupti nihil corporis obcaecati tempora possimus.",
        precio: 629,
        precio_falso: 1256
    },

]

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

