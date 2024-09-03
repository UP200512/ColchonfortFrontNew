// import imagen from "./../../images/Fotografia Editorial/1.1.jpg"
import { useState, useEffect } from "react";
// import imagen from "./../../images/Fotografia Editorial/8.4.jpg"
// import { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { AiFillDelete } from "react-icons/ai";
import { GetIamges } from "../../axios/hostingAPI";
import repuesto from "../../images/FoRT.png"
import { DeleteProduct } from "../../axios/http";

// import CarouselProductos from "./CarouselProductos";
function CardProducto(props: any) {
    // const [list, setList]= useState<string[]>([])
    const [images, setImages] = useState<string[]>([])
    const [size, setSize]= useState<string>("")
    const [precio_falso, setPrecio_falso] = useState<any>(props.item.precio_falso_matri)
    const [precio, setPrecio] = useState<any>(props.item.precio_matri)

    console.log(size)

    useEffect(() => {
        // console.log(props.item)
        GetIamges(props.item.id)
            .then(response => {
                setImages(response?.data)
                // console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [props.item.id]);
    useEffect(()=>{
        switch(size){
            case 'individual': {
                setPrecio_falso(props.item.precio_falso_indi)
                setPrecio(props.item.precio_indi)
            } break
            case 'matrimonial': {
                setPrecio_falso(props.item.precio_falso_matri)
                setPrecio(props.item.precio_matri)
            } break
            case 'queen': {
                setPrecio_falso(props.item.precio_falso_queen)
                setPrecio(props.item.precio_queen)
            } break
            case 'king': {
                setPrecio_falso(props.item.precio_falso_king)
                setPrecio(props.item.precio_king)
            } break
        }
    },[size])



    const handleEdit = (id: number) => {
        // Redirigir a la URL específica con el ID del producto
        window.location.href = `/productos/edit/${id}`;
    }


    



    return (
        // <a href={`/productos/${props.item.id}`}>
            <div className="card d-inline-flex h-100 " data-aos="zoom-in"
                data-aos-duration="1000">
                <img className="card-img-top"

                    src={images[0] ? 'http://localhost/api/imagenes/' + props.item.id + "/" + images[0] : repuesto}
                    alt="Card image cap"
                />
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
                            <div>
                                
                            </div>
                            <p className="card-text mr-auto text-danger text-decoration-line-through"><b>${precio_falso} MXN</b></p>
                            
                            <p className="card-text mr-auto"><b>${precio} MXN</b></p>
                            <select className="form-select form-select-sm m-2" aria-label="Small select example" defaultValue="matrimonial" onChange={(e)=>setSize(e.target.value)}>
                                <option value="individual">Individual</option>
                                <option value="matrimonial">Matrimonial</option>
                                <option value="queen">Queen Size</option>
                                <option value="king">King size</option>
                            </select>


                            <div className="row">
                                <div className="col text-center" >
                                    <p className="btn btn-sm btn-outline-primary m-2"><MdAddShoppingCart /></p>
                                    {props.admin ? <p className="btn btn-sm btn-outline-primary m-2" onClick={() => handleEdit(props.item.id)}>Editar <CiEdit /></p> : null}
                                    {props.admin ? <p className="btn btn-sm btn-outline-danger m-2" onClick={() => DeleteProduct(props.item.id)}>Eliminar <AiFillDelete /></p> : null}
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}

export default CardProducto