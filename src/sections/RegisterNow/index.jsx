import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
const registerNow = () => {
    return (
        <div
            style={{ backgronudColor: '#00D5FF', paddingBottom: '150px' }}
            id="registrationsection"
        >
            <Container style={{ marginTop: '5rem' }}>
                <Row className="justify-content-center">
                    <h1 className="title">REGISTER NOW</h1>
                </Row>
                <Row className="justify-content-around register-now">
                    <Col md={5} sm={6}>
                        <Card
                            style={{ backgroundColor: 'black'}}
                            className="justify-content-center text-center pt-5 w-100 register-now-card"
                        >
                            <Card.Body className="pb-5" style={{position:"relative"}}>
                                <h1
                                    style={{
                                        fontWeight: 900,
                                    }}
                                >
                                    HACKATHON
                                </h1>
                                <hr
                                    style={{
                                        height: '1px',
                                        width: '80%',
                                        borderWidth: 0,
                                        color: '#FFFAFF',
                                        backgroundColor: '#FFFAFF',
                                    }}
                                />
                                <ul className="text-left">
                                    <li className="li">
                                        <span>Win cool schwags</span>
                                    </li>
                                    <li className="li">
                                        <span>
                                            Foster problem-solving skills
                                        </span>
                                    </li>
                                    <li className="li">
                                        <span>
                                            Interact with other enthusiasts
                                        </span>
                                    </li>
                                    <li className="li">
                                        <span>Find your hidden talents</span>
                                    </li>
                                    {/* <li className="li"><span>Cool Swags</span></li> */}
                                </ul>
                                <Button className="secondary-button mt-5 register-now-button">
                                    Register
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={5} sm={6}>
                        <Card
                            style={{ backgroundColor: 'black' }}
                            className="justify-content-center text-center pt-5 w-100 register-now-card"
                        >
                            <Card.Body className="justify-content-center text-center pb-5" style={{position:"relative"}}>
                                <h1
                                    style={{
                                        fontWeight: 900,
                                        marginBottom: '4vh',
                                    }}
                                >
                                    TALKS AND WORKSHOP
                                </h1>
                                <hr
                                    style={{
                                        height: '1px',
                                        width: '80%',
                                        borderWidth: 0,
                                        color: '#FFFAFF',
                                        backgroundColor: '#FFFAFF',
                                    }}
                                />
                                <ul className="text-left">
                                    <li className="li">
                                        <span>Gain industry exposure</span>
                                    </li>
                                    <li className="li">
                                        <span>Learn about advancing tech </span>
                                    </li>
                                    <li className="li">
                                        <span>
                                            Meet experts from a range of fields
                                        </span>
                                    </li>
                                    <li className="li">
                                        <span>Acquire hands-on experience</span>
                                    </li>
                                    <li className="li">
                                        <span>Grab official certificates</span>
                                    </li>
                                    <li className="li">
                                        <span>Showcase your expertise</span>
                                    </li>
                                </ul>

                                <Button className="secondary-button mt-5 register-now-button">
                                    Register
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default registerNow;
