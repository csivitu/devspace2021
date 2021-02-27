import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Fade } from 'react-reveal';
import Img1 from '../../img/gallery/i1.jpg';
import Img2 from '../../img/gallery/i2.jpg';
import Img3 from '../../img/gallery/i3.jpg';
import Img4 from '../../img/gallery/i4.jpg';
import Img5 from '../../img/gallery/i5.jpg';
import Img6 from '../../img/gallery/i6.jpg';
import Img7 from '../../img/gallery/i7.jpg';
import Img8 from '../../img/gallery/i8.jpg';
import Img9 from '../../img/gallery/i9.jpg';
const Gallery = () => {
    return (
        <Container fluid id="gallcontainer" style={{paddingTop: "4rem"}}>
            <Row className="justify-content-center mb-5 text-center pt-5">
                <h1>
                    <b>GALLERY</b>
                </h1>
            </Row>

            <Row className="justify-content-center">
                <Col
                    md={3}
                    sm={12}
                    className="d-flex justify-content-center align-items-center"
                >
                    <Fade left>
                        <img src={Img1} alt="1" className="img-fluid black-img" />
                    </Fade>
                </Col>
                <Col
                    md={3}
                    sm={12}
                    className="mt-3 mt-md-0 d-flex justify-content-center align-items-center"
                >
                    <Fade bottom>
                        <img src={Img2} alt="1" className="img-fluid black-img" />
                    </Fade>
                </Col>
                <Col
                    md={3}
                    sm={12}
                    className="mt-3 mt-md-0 d-flex justify-content-center align-items-center"
                >
                    <Fade right>
                        <img src={Img3} alt="1" className="img-fluid black-img" />
                    </Fade>
                </Col>
            </Row>
            <Row className="justify-content-center mt-3">
                <Col
                    md={3}
                    sm={12}
                    className=" d-flex justify-content-center align-items-center"
                >
                    <Fade left>
                        <img src={Img4} alt="1" className="img-fluid black-img" />
                    </Fade>
                </Col>
                <Col
                    md={3}
                    sm={12}
                    className="mt-3 mt-md-0 d-flex justify-content-center align-items-center"
                >
                    <Fade bottom>
                        <img src={Img5} alt="1" className="img-fluid black-img" />
                    </Fade>
                </Col>
                <Col
                    md={3}
                    sm={12}
                    className="mt-3 mt-md-0 d-flex justify-content-center align-items-center"
                >
                    <Fade right>
                        <img src={Img6} alt="1" className="img-fluid black-img" />
                    </Fade>
                </Col>
            </Row>
            <Row className="justify-content-center  mt-3">
                <Col
                    md={3}
                    sm={12}
                    className="d-flex justify-content-center align-items-center"
                >
                    <Fade left>
                        <img src={Img7} alt="1" className="img-fluid black-img" />
                    </Fade>
                </Col>
                <Col
                    md={3}
                    sm={12}
                    className="mt-3 mt-md-0 d-flex justify-content-center align-items-center"
                >
                    <Fade bottom>
                        <img src={Img8} alt="1" className="img-fluid black-img" />
                    </Fade>
                </Col>
                <Col
                    md={3}
                    sm={12}
                    className="mt-3 mt-md-0 d-flex justify-content-center align-items-center"
                >
                    <Fade right>
                        <img src={Img9} alt="1" className="img-fluid black-img" />
                    </Fade>
                </Col>
            </Row>
        </Container>
    );
};

export default Gallery;
