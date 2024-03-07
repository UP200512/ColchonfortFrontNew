import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-about bottom">
      <div className="container-about-footer">
        <div className="container-footer-sup row p-2">
          <div className="col text-center">
            {" "}
            <h4>FoRT</h4> Acerca de <br /> Bolsa de trabajo
          </div>
          <div className="col text-center">
            {" "}
            <h4>Atencion</h4> Acerca de <br /> Bolsa de trabajo{" "}
          </div>
          <div className="col text-center">
            {" "}
            <h4>Legal</h4> Acerca de <br /> Bolsa de trabajo
          </div>
        </div>
        <div className="container-footer-bot">
          <div className="row">
            <div className="col text-center p-1">
              <h1>
                <FaCcVisa style={{ marginRight: '10px' }} />
                <FaCcMastercard style={{ marginRight: '10px' }}/>
                <FaCcPaypal style={{ marginRight: '10px' }}/>
              </h1>
            </div>
            <div className="col text-center">
              FoRT Hecho por:
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
