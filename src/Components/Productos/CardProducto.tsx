// import imagen from "./../../images/Fotografia Editorial/1.1.jpg"
import { useState, useEffect } from "react";
// import imagen from "./../../images/Fotografia Editorial/8.4.jpg"
// import { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { GetIamges } from "../../axios/hostingAPI";

// import CarouselProductos from "./CarouselProductos";
function CardProducto(props: any) {
    const [list, setList]= useState<string[]>([])
    useEffect(()=>{
        console.log(props.item)
        const listaImagenes= GetIamges(props.item.id)
        console.log(listaImagenes)
    }, [])
    const handleEdit = (id: number) => {
        // Redirigir a la URL específica con el ID del producto
        window.location.href = `/productos/${id}`;
    }
    const [admin, setAdmin] = useState(false)




    return (
        <div className="card d-inline-flex "data-aos="zoom-in" 
        data-aos-duration="3000">
            <img className="card-img-top" src={'http://localhost/api/imagenes/28/0.jpg'} alt="Card image cap"  />
            <div className="card-body d-flex align-items-end">
                <div className="container">
                    <div className="col text-center">
                        <p className="card-text mr-auto"><b>{props.item.nombre}</b></p>

                        <p className="card-text mr-auto">{props.item.descripcion}</p>
                        <div className="accordion" id="accordion">
                            <div className="accordion-item">
                                <h4 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#panelsStayOpen-collapse" + props.index} aria-expanded="false" aria-controls={"panelsStayOpen-collapse" + props.index}>
                                        Descripción
                                    </button>
                                </h4>
                                <div id={"panelsStayOpen-collapse" + props.index} className="accordion-collapse collapse ">
                                    <div className="accordion-body">
                                        <p className="card-text mr-auto">{props.item.descripcion_larga}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="card-text mr-auto text-danger text-decoration-line-through"><b>${props.item.precio_falso} MXN</b></p>
                        <p className="card-text mr-auto"><b>${props.item.precio} MXN</b></p>
                        <select className="form-select form-select-sm m-2" aria-label="Small select example" defaultValue="matrimonial">
                            <option value="individual">Individual</option>
                            <option value="matrimonial">Matrimonial</option>
                            <option value="queen">Queen Size</option>
                            <option value="king">King size</option>
                        </select>


                        <div className="row">
                            <div className="col text-center" >
                                <p className="btn btn-sm btn-outline-primary m-2"><MdAddShoppingCart /></p>
                                {admin ? <p className="btn btn-sm btn-outline-primary m-2" onClick={() => handleEdit(15)}>Editar <CiEdit /></p> : null}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardProducto