import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Img1 from '../../img/gallery/i1.png'
import Img2 from '../../img/gallery/i2.png'
import Img3 from '../../img/gallery/i3.png'
import Img4 from '../../img/gallery/i4.png'
import Img5 from '../../img/gallery/i5.png'
import Img6 from '../../img/gallery/i6.png'
import Img7 from '../../img/gallery/i7.png'
import Img8 from '../../img/gallery/i8.png'
import Img9 from '../../img/gallery/i9.png'
const Gallery = () => {
    return (
        <Container fluid id="gallcontainer">
            <Row className="justify-content-center mb-5 text-center pt-5">
                <h1><b>GALLERY</b></h1>
            </Row>
            
                <Row className="justify-content-center">
                    <Col md={3} sm={12} className="d-flex justify-content-center align-items-center">
                        <img src={Img1} alt="1" className="img-fluid"/>
                    </Col>
                    <Col md={3} sm={12} className="mt-3 mt-md-0 d-flex justify-content-center align-items-center">
                        <img src={Img2} alt="2" className="img-fluid"/>
                    </Col>
                    <Col md={3} sm={12} className="mt-3 mt-md-0 d-flex justify-content-center align-items-center">
                        <img src={Img3} alt="3" className="img-fluid"/>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                    <Col md={3} sm={12} className=" d-flex justify-content-center align-items-center">
                        <img src={Img4} alt="4" className="img-fluid"/>
                    </Col>
                    <Col md={3} sm={12}  className="mt-3 mt-md-0 d-flex justify-content-center align-items-center">
                        <img src={Img5} alt="5" className="img-fluid"/>
                    </Col>
                    <Col md={3} sm={12}  className="mt-3 mt-md-0 d-flex justify-content-center align-items-center">
                        <img src={Img6} alt="6" className="img-fluid"/>
                    </Col>
                </Row>
                <Row className="justify-content-center  mt-3">
                    <Col md={3} sm={12} className="d-flex justify-content-center align-items-center">
                        <img src={Img7} alt="7" className="img-fluid"/>
                    </Col>
                    <Col md={3} sm={12}  className="mt-3 mt-md-0 d-flex justify-content-center align-items-center">
                        <img src={Img8} alt="8" className="img-fluid"/>
                    </Col>
                    <Col md={3} sm={12}  className="mt-3 mt-md-0 d-flex justify-content-center align-items-center">
                        <img src={Img9} alt="9" className="img-fluid"/>
                    </Col>
                </Row>
            
        </Container>
    );
};

export default Gallery;