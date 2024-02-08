import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TbLogout } from 'react-icons/tb'
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

export default function Header2() {
    return (
        <>

            <Navbar expand={'lg'} className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="/">Soy FORT</Navbar.Brand>
                    

                    <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg' />
                    <Navbar.Offcanvas
                        id='offcanvasNavbar-expand-lg'
                        aria-labelledby='offcanvasNavbarLabel-expand-lg'
                        placement="end"
                        
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id='offcanvasNavbarLabel-expand-lg'>
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
                                    <NavDropdown.Item href="productos/lineas">Lineas</NavDropdown.Item>
                                    {/* <NavDropdown title="Tallas" id='tallas'>
                                        <NavDropdown.Item href="#action4">Individual</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Matrimonial</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Queen Size</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">King Size</NavDropdown.Item>
                                    </NavDropdown> */}


                                </NavDropdown>
                                <Nav.Link href="/contacto">Contáctanos</Nav.Link>
                                <Nav.Link href="/"><h3><ImFacebook2 /></h3></Nav.Link>
                                <Nav.Link href="/"><h3><FaInstagramSquare /></h3></Nav.Link>

                                <button className='btn btn-dark'>Salir <TbLogout /></button>
                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </>
    );
}
