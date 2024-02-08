// // import React from 'react'

import Modal from 'react-bootstrap/Modal';
import imagen from '../../images/2.png'

interface ModalProductProps { // Define los props que recibe el componente
    handleClose: () => void;
    show: boolean;
}

export default function ModalProduct(props: ModalProductProps) {

    // const [lgShow, setShow] = useState(false);

    return (
        <>
            {/* <Button onClick={() => setShow(true)}>Large modal</Button> */}

            <Modal
                shouldCloseOnOverlayClick="true"
                id="exampleModal"
                show={props.show}
                onHide={props.handleClose}
            >
                <Modal.Header closeButton className='text-center'>
                    <Modal.Title>
                        Ceremony
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 overflow-auto h-500"> {/* Usa h-500 para controlar la altura */}
                                <img src={imagen} alt="" className="img-fluid" />
                                <img src={imagen} alt="" className="img-fluid" />
                                <img src={imagen} alt="" className="img-fluid" />
                            </div>
                            <div className="col-sm-8">
                                <img src={imagen} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-danger" onClick={props.handleClose}>
                        Cerrar
                    </button>
                </Modal.Body>
            </Modal>

        </>
    );
}
