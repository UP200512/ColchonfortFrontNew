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
                size="xl"
                id="exampleModal"
                show={props.show}
                onHide={() => props.handleClose}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton={true}>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Large Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center" style={{ maxHeight: '500px' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 overflow-auto" style={{ height: '450px' }}>
                            <img src={imagen} alt="" className="img-fluid" />
                            <img src={imagen} alt="" className="img-fluid" />
                            <img src={imagen} alt="" className="img-fluid" />
                                </div>
                            <div className="col-sm-8">
                            <img src={imagen} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-dark" onClick={props.handleClose}>
                        Cerrar Modal
                    </button>
                </Modal.Body>
            </Modal>
        </>
    );
}
