// import imagen from "./../../images/Fotografia Editorial/1.1.jpg"
import { useState } from "react";
import imagen from "./../../images/Fotografia Editorial/8.4.jpg"
// import { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

// import CarouselProductos from "./CarouselProductos";
function CardProducto(props: any) {
    const [admin, setAdmin] = useState(false)




    return (
        <div className="card d-inline-flex">
            <img className="card-img-top" src={imagen} alt="Card image cap" />
            <div className="card-body d-flex align-items-end">
                <div className="container">
                    <div className="col text-center">
                        <p className="card-text mr-auto"><b>{props.item.nombre_corto}</b></p>


                        <div className="accordion" id="accordion">
                            <div className="accordion-item">
                                <h4 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#panelsStayOpen-collapse" + props.index} aria-expanded="false" aria-controls={"panelsStayOpen-collapse" + props.index}>
                                        Descripción
                                    </button>
                                </h4>
                                <div id={"panelsStayOpen-collapse" + props.index} className="accordion-collapse collapse ">
                                    <div className="accordion-body">
                                        {props.item.descripcion}
                                    </div>
                                </div>
                            </div>



                        </div>






                        <p className="card-text mr-auto text-danger text-decoration-line-through"><b>${props.item.precio_falso} MXN</b></p>
                        <p className="card-text mr-auto"><b>${props.item.precio} MXN</b></p>
                        <select className="form-select form-select-sm m-2" aria-label="Small select example">
                            <option value="individual">Individual</option>
                            <option value="matrimonial" selected>Matrimonial</option>
                            <option value="queen">Queen Size</option>
                            <option value="king">King size</option>
                        </select>
                        <div className="row">
                            <div className="col text-center" >
                                <p className="btn btn-sm btn-outline-primary m-2"><MdAddShoppingCart /></p>
                                {admin ? <p className="btn btn-sm btn-outline-primary m-2">Editar <CiEdit /></p> : null}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardProducto