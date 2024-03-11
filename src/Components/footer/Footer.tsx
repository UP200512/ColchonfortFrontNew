import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";

export default function Footer() {
  return (

    <div className="container-fluid m-0 footer-about">
      <div className="row p-2">
        <div className="col-md-4 text-center">
          <h4>FoRT</h4>
          <p>Acerca de</p>
          <p>Bolsa de trabajo</p>
        </div>
        <div className="col-md-4 text-center">
          <h4>Atencion</h4>
          <p>Acerca de</p>
          <p>Bolsa de trabajo</p>
        </div>
        <div className="col-md-4 text-center">
          <h4>Legal</h4>
          <p>Acerca de</p>
          <p>Bolsa de trabajo</p>
        </div>
      </div>
      <div className="row" style={{backgroundColor: "#54574d"}}>
        <div className="col-md-6 text-center">
          <h1>
            <FaCcVisa style={{ marginRight: '10px' }} />
            <FaCcMastercard style={{ marginRight: '10px' }} />
            <FaCcPaypal style={{ marginRight: '10px' }} />
          </h1>
        </div>
        <div className="col-md-6 text-center">
          <p>FoRT Hecho por:</p>
        </div>
      </div>
    </div>
  );
}