import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import watsonai from '../img/watsonai.png';
import voiceui from '../img/voiceui.png';
import competitivecoding from '../img/competitivecoding.png';

import mohanram from '../img/mohanram.png';
import lawrence from '../img/lawrence.png';
import vishwa from '../img/vishwa.png';

import sakshi from '../img/sakshi'

const workshop = () => {
    return (
        <div
            className="w-100 h-100 blue-bg"
            style={{ backgronudColor: '#00D5FF' }}
        >
            <Container style={{ paddingTop: '5rem' }} className="blue-bg pb-3">
                <Row className="justify-content-center">
                    <h1 style={{ color: '#141414', textAlign:"center" }}>
                        <b>PREVIOUS TALKS AND WORKSHOPS</b>
                    </h1>
                </Row>
                {/* <Row className="justify-content-center">
                    <p
                        className="text-muted "
                        style={{ fontFamily: 'Lato', fontWeight: '400' }}
                    >
                        to learn and discover new skills
                    </p>
                </Row> */}
            </Container>
            <Container
                className="d-flex flex-column justify-content-center align-items-center"
                fluid
            >
                <Row
                    className="justify-content-center pt-3"
                    style={{ maxWidth: '70rem' }}
                >
                    <Col
                        sm={7}
                        md={4}
                        className="mt-5 d-flex justify-content-center align-items-center"
                    >
                        <Card
                            company={'IBM'}
                            topic={'WATSON AI'}
                            description={
                                "Learn how to use IBM Watson's platform to bring AI tools and apps to your data."
                            }
                            image={watsonai}
                        />
                    </Col>
                    <Col
                        sm={7}
                        md={4}
                        className="mt-5 d-flex justify-content-center align-items-center"
                    >
                        <Card
                            company={'Coding Blocks'}
                            topic={'COMPETITIVE CODING'}
                            description={
                                "Learn the do's and dont's of the coding world."
                            }
                            image={competitivecoding}
                        />
                    </Col>
                    <Col
                        sm={7}
                        md={4}
                        className="mt-5 d-flex justify-content-center align-items-center"
                    >
                        <Card
                            company={'Amazon'}
                            topic={'VOICE UI'}
                            description={
                                'Learn how to make Alexa sing to your tune.'
                            }
                            image={voiceui}
                        />
                    </Col>
                </Row>
                <Row
                    className="justify-content-center pt-3"
                    style={{ maxWidth: '70rem' }}
                >
                    <Col
                        sm={7}
                        md={4}
                        className="mt-5 d-flex justify-content-center align-items-center"
                    >
                        <Card
                            company={'Digital Ocean'}
                            topic={'MOHAN RAM'}
                            description={
                                'Simplifying the Cloud a session on scaling.'
                            }
                            image={mohanram}
                        />
                    </Col>
                    <Col
                        sm={7}
                        md={4}
                        className="mt-5 d-flex justify-content-center align-items-center"
                    >
                        <Card
                            company={'IBM'}
                            topic={'LAWRENCE MOHANRAJ'}
                            description={
                                'Embracing innovation in the digital era.'
                            }
                            image={lawrence}
                        />
                    </Col>
                    <Col
                        sm={7}
                        md={4}
                        className="mt-5 d-flex justify-content-center align-items-center"
                    >
                        <Card
                            company={'Mozilla'}
                            topic={'VISHWAPRASATH K.S.'}
                            description={'Web AR & Mixed reality on browsers.'}
                            image={vishwa}
                        />
                    </Col>
                </Row>
                {/* <Row className="justify-content-around mt-5">
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

export default workshop;
