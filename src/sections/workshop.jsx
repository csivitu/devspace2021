import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../components/Card';
import  'bootstrap/dist/css/bootstrap.min.css'
const workshop = () => {
    return (
        <div className="w-100 h-100" style={{backgronudColor: '#00D5FF'}}>
            <Container style={{marginTop: '200px'}}>
                <Row className="justify-content-center">
                    <h1 style={{color: '#141414'}}><b>Workshop</b></h1>
                </Row>
                <Row className="justify-content-center">
                    <p className="text-muted " style={{fontFamily: 'Lato',fontWeight: '400'}}>to learn and discover new skills</p>
                </Row>
            </Container>
            <Container fluid style={{marginTop:'100px'}}>
               <Row className="justify-content-around mt-5">
                <Col sm={7} lg={3} className="mt-5">
                    <Card/>
                </Col>
                <Col sm={7} lg={3} className="mt-5">
                    <Card/>
                </Col>
                <Col sm={7} lg={3} className="mt-5">
                    <Card/>
                </Col>
               </Row>
               <Row className="justify-content-around mt-5">
               <Col sm={7} lg={3} className="mt-5">
                    <Card/>
                </Col>
                <Col sm={7} lg={3} className="mt-5">
                    <Card/>
                </Col>
                <Col sm={7} lg={3} className="mt-5">
                    <Card/>
                </Col>
               </Row>
            </Container>
        </div>
    );
};

export default workshop;