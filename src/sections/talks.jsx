import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../components/Card';
import  'bootstrap/dist/css/bootstrap.min.css'
const talks = () => {
    return (
        <div className="w-100 h-100" style={{backgronudColor: '#00D5FF',paddingBottom: '150px'}}>
            <Container style={{marginTop: '200px'}}>
                <Row className="justify-content-center">
                    <h1 style={{color: '#141414'}}><b>TALKS</b></h1>
                </Row>
                <Row className="justify-content-center">
                    <p className="text-muted " style={{fontFamily: 'Lato',fontWeight: '400'}}>from industry-experts</p>
                </Row>
            </Container>
            <Container fluid style={{marginTop:'5vh'}}>
            <Row className="justify-content-center mt-5">
                    <Col
                        sm={7}
                        lg={4}
                        className="mt-5 d-flex justify-content-center align-items-center"
                    >
                        <Card />
                    </Col>
                    <Col
                        sm={7}
                        lg={4}
                        className="mt-5 d-flex justify-content-center align-items-center"
                    >
                        <Card />
                    </Col>
                    <Col
                        sm={7}
                        lg={4}
                        className="mt-5 d-flex justify-content-center align-items-center"
                    >
                        <Card />
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col
                        sm={7}
                        lg={4}
                        className="mt-5 d-flex justify-content-center align-items-center"
                    >
                        <Card />
                    </Col>
                    <Col
                        sm={7}
                        lg={4}
                        className="mt-5 d-flex justify-content-center align-items-center"
                    >
                        <Card />
                    </Col>
                    <Col
                        sm={7}
                        lg={4}
                        className="mt-5 d-flex justify-content-center align-items-center"
                    >
                        <Card />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default talks;