import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import  'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
const registerNow = () => {
    return (
        <div style={{backgronudColor: '#00D5FF',paddingBottom: '150px'}} id="registrationsection">
            <Container style={{marginTop: '150px'}}>
                <Row className="justify-content-center">
                    <h1 className="title">REGISTER NOW</h1>
                </Row>
                <Row className="justify-content-around">
                    <Col md={5} sm={6}>
                        <Card style={{backgroundColor: 'black'}} className="justify-content-center text-center pt-5 h-auto w-100">
                            <Card.Body className="pb-5">
                                <h1 style={{fontWeight:900,marginBottom: '9vh'}}>HACKATHON</h1>
                                <hr style={{ height:'1px', width:'80%',borderWidth:0, color:'#FFFAFF', backgroundColor:'#FFFAFF'}}/>
                                <ul className="text-left">
                                    <li className="li"><span>Participate in hackathon</span></li>
                                    <li className="li"><span>Cool Swags</span></li>
                                    <li className="li"><span>Prize pool of 3 lacs</span></li>
                                    <li className="li"><span>Participate in hackathon</span></li>
                                    <li className="li"><span>Cool Swags</span></li>
                                </ul>
                                <Button className="secondary-button mt-5">Register</Button>
                                <p className="mt-2 cost">at free of cost</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={5} sm={6}>
                        <Card style={{backgroundColor: 'black'}} className="justify-content-center text-center h-auto pt-5 w-100">
                                <Card.Body className="justify-content-center text-center pb-5">
                                    <h1 style={{fontWeight:900,marginBottom: '4vh'}}>TALKS AND WORKSHOP</h1>
                                    <hr style={{ height:'1px', width:'80%',borderWidth:0, color:'#FFFAFF', backgroundColor:'#FFFAFF'}}/>
                                   <ul className="text-left">
                                        <li className="li"><span>Get industry exposure</span></li>
                                        <li className="li"><span>Cool Swags</span></li>
                                        <li className="li"><span>Grab official certificate</span></li>
                                        <li className="li"><span>Learn new skills</span></li>
                                        <li className="li"><span>Cool Swags</span></li>
                                   </ul> 
                        
                                    <Button className="secondary-button mt-5">Register</Button>
                                    <p className="mt-2 cost">at free of cost, again</p>
                                </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default registerNow;