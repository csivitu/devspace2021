import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../components/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

import mohanram from '../img/mohanram.png';
import lawrence from '../img/lawrence.png';
import vishwa from '../img/vishwa.png';

const talks = () => {
    return (
        <div className="w-100 h-100" style={{backgronudColor: '#00D5FF',paddingBottom: '150px'}}>
            <Container style={{marginTop: '5rem'}}>
                <Row className="justify-content-center">
                    <h1 style={{color: '#141414'}}><b>PREVIOUS TALKS</b></h1>
                </Row>
                <Row className="justify-content-center">
                    <p className="text-muted " style={{fontFamily: 'Lato',fontWeight: '400'}}>from industry-experts</p>
                </Row>
            </Container>
            <Container  style={{marginTop:'5vh'}} fluid>
            <Row className="justify-content-center mt-5">
                    <Col
                        sm={7}
                        md={4}
                        className="mt-5 d-flex justify-content-center align-items-center"
                    >
                        <Card company={"Digital Ocean"} topic={"MOHAN RAM"} description={"Simplifying the Cloud a session on scaling."} image={mohanram} />
                    </Col>
                    <Col
                        sm={7}
                        md={4}
                        className="mt-5 d-flex justify-content-center align-items-center"
                    >
                        <Card company={"IBM"} topic={"LAWRENCE MOHANRAJ"} description={"Embracing innovation in the digital era."} image={lawrence} />
                    </Col>
                    <Col
                        sm={7}
                        md={4}
                        className="mt-5 d-flex justify-content-center align-items-center"
                    >
                        <Card company={"Mozilla"} topic={"VISHWAPRASATH K.S."} description={"Web AR & Mixed reality on browsers."} image={vishwa} />
                    </Col>
                </Row>
                {/* <Row className="justify-content-center mt-5">
                    <Col
                        sm={7}
                        md={4}
                        className="mt-5 d-flex justify-content-center align-items-center"
                    >
                        <Card />
                    </Col>
                    <Col
                        sm={7}
                        md={4}
                        className="mt-5 d-flex justify-content-center align-items-center"
                    >
                        <Card />
                    </Col>
                    <Col
                        sm={7}
                        md={4}
                        className="mt-5 d-flex justify-content-center align-items-center"
                    >
                        <Card />
                    </Col>
                </Row> */}
            </Container>
        </div>
    );
};

export default talks;