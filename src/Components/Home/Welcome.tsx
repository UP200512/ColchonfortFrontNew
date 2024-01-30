import Carousel from 'react-bootstrap/Carousel';
import uno from '../../images/1.png';
import dos from '../../images/2.png';
import tres from '../../images/3.png';
import ModalProduct from './ModalProduct';
import { useState } from 'react';


function Welcome() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)






    return (
        <div className='container text-center'>
            <div className='row '>
                <div className='col'>
                    <Carousel style={{ width: "100%", margin: 'auto' }} >
                        <Carousel.Item>
                            <img
                                className="btn"
                                onClick={() => setShow(true)}
                                src={uno}
                                alt=""
                                style={{ maxWidth: '100%', maxHeight: '100%', margin: 'auto' }}
                            />
                            <Carousel.Caption>
                                <h3 className='text-white bg-dark'>Azul celeste</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={dos} alt="" style={{ maxWidth: '100%', margin: 'auto' }} />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={tres} alt="" style={{ maxWidth: '100%', margin: 'auto' }} />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <ModalProduct handleClose={handleClose} show={show} />
        </div>
    )
}

export default Welcome
