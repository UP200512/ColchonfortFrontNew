import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaUser } from "react-icons/fa";
import logoImage from "../../images/FoRT.png";
import { MdHelp } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlinePoweroff } from "react-icons/ai";

export default function Header2() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;
    const header = document.getElementById('mi-header');

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Desplazándose hacia abajo
        setVisible(false);
      } else {
        // Desplazándose hacia arriba
        setVisible(true);
      }
      
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <Navbar expand={"lg"} className={`bg-body-tertiary sticky-top ${visible ? 'visible' : 'invisible'}`}>
        <Container fluid>
          <Navbar.Brand href="/">
            {" "}
            <img
              src={logoImage} // Asigna la ruta de la imagen como el valor del atributo src
              alt="Soy FORT" // Proporciona un texto alternativo para accesibilidad
              height="30" // Ajusta la altura de la imagen según sea necesario
              className="d-inline-block align-top" // Clase para alinear la imagen
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                Soy FORT
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/informacion">Nosotros</Nav.Link>
                <Nav.Link href="/materiales">Materiales</Nav.Link>

                                <NavDropdown
                                    title="Productos"
                                    id='offcanvasNavbarDropdown-expand-lg'
                                >

                                    <NavDropdown.Item href="/productos">Productos</NavDropdown.Item>
                                    <NavDropdown.Item href="/productos/lineas">Lineas</NavDropdown.Item>
                                    <NavDropdown.Item href="/productos/administrar">Administrar</NavDropdown.Item>
                                    {/* <NavDropdown title="Tallas" id='tallas'>
                                        <NavDropdown.Item href="#action4">Individual</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Matrimonial</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Queen Size</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">King Size</NavDropdown.Item>
                                    </NavDropdown> */}
                </NavDropdown>
                <Nav.Link href="/contacto">Contáctanos</Nav.Link>
                {/* Dropdown para el perfil */}
                <NavDropdown
                  title={<FaUser className=" " />}
                  id="basic-nav-dropdown"
                  align="end"
                >
                  <NavDropdown.Item href="/perfil"><FaUser/>  Mi Perfil</NavDropdown.Item>
                  <NavDropdown.Item href="/ayuda"><MdHelp/> Ayuda</NavDropdown.Item>
                  <NavDropdown.Item href="/configuracion">
                    <AiOutlineSetting/> Configuración
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/" className="text-danger">
                    <AiOutlinePoweroff/>  Salir
                  </NavDropdown.Item>
                  
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
