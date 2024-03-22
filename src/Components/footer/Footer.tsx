import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="container-fluid m-0 footer-about">
      <div className="row p-2">
        <div className="col-md-4 text-center">
          <div className="row p-2">
            <h4>
              <span className="border-bottom border-white">
                <a className="link-light link-underline-opacity-0" href="#">
                  FoRT
                </a>
              </span>
            </h4>
          </div>
          <p>
            <a
              className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              href="/informacion"
            >
              Acerca de
            </a>
          </p>
          <p>
            <a
              className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              href="#"
            >
              Bolsa de trabajo
            </a>
          </p>
        </div>
        <div className="col-md-4 text-center">
          <div className="row p-2">
            <h4>
              <span className="border-bottom border-white">
                <a className="link-light link-underline-opacity-0" href="#">
                  Atencion
                </a>
              </span>
            </h4>
          </div>
          <p>
            <a
              className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              href="#"
            >
              Acerca de
            </a>
          </p>
          <p>
            <a
              className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              href="#"
            >
              Bolsa de trabajo
            </a>
          </p>
        </div>
        <div className="col-md-4 text-center">
          <div className="row p-2">
            <h4>
              <span className="border-bottom border-white">
                <a className="link-light link-underline-opacity-0" href="#">
                  Legal
                </a>
              </span>
            </h4>
          </div>
          <p>
            <a
              className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              href="#"
            >
              Acerca de
            </a>
          </p>
          <p>
            <a
              className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              href="#"
            >
              Bolsa de trabajo
            </a>
          </p>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: "#54574d" }}>
        <div className="col-md-6 text-center">
          <h1>
            <FaCcVisa style={{ marginRight: "10px" }} />
            <FaCcMastercard style={{ marginRight: "10px" }} />
            <FaCcPaypal style={{ marginRight: "10px" }} />
          </h1>
        </div>
        <div className="col-md-6 text-center">
          <p>FoRT Hecho por:</p>
        </div>
      </div>
    </div>
  );
}