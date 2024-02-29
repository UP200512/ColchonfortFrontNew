// import imagen from "./../../images/Fotografia Editorial/1.1.jpg"
import imagen from "./../../images/Fotografia Editorial/8.4.jpg"
import { MdAddShoppingCart } from "react-icons/md";
// import CarouselProductos from "./CarouselProductos";
function CardProducto(props: any) {
    return (
        
        <div className="card m-1 d-inline-flex">
            <img className="card-img-top" src={imagen} alt="Card image cap" />
            <div className="card-body d-flex align-items-end">
                <div className="container">
                    <div className="col">
                        <p className="card-text mr-auto"><b>{props.item.nombre_corto}</b></p>
                        <p className="card-text mr-auto">{props.item.descripcion}</p>
                        <p className="card-text mr-auto text-danger text-decoration-line-through"><b>${props.item.precio_falso} MXN</b></p>
                        <p className="card-text mr-auto"><b>${props.item.precio} MXN</b></p>
                        <select className="form-select form-select-sm m-2" aria-label="Small select example">
                            <option value="individual">Individual</option>
                            <option value="matrimonial" selected>Matrimonial</option>
                            <option value="queen">Queen Size</option>
                            <option value="king">King size</option>
                        </select>
                        <div className="row">
                            <p className="btn btn-sm btn-primary">Añadir al carrito <MdAddShoppingCart /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProducto