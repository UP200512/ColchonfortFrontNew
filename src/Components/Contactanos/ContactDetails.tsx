import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactDetails() {
  return (
    <div className="container text-center p-4">
      <h4>Detalles</h4>
      <div className="row p-4 justify-content-around">
        <div className="shadow p-3 mb-5 bg-white rounded col-md-5 mb-3" >
          <h2>
            <FaPhoneAlt />
          </h2>
          <h6>Ventas:</h6> 4495235532 <br/><br/>
          <h6>Bolsa de Trabajo</h6>  4494242223
        </div>
        <div className="shadow p-3 mb-5 bg-white rounded col-md-5 mb-3">
          <h1>
            <MdEmail />
          </h1>
        <h6>info</h6>
        sistemas.colchonfort@soyfort.com <br/><br/>
        <h6>Ventas</h6>
        ventas.colchonfort@soyfort.com

        </div>
      </div>
    </div>
  );
}
