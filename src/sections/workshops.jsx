import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

// import mohanram from '../img/mohanram.png';
// import lawrence from '../img/lawrence.png';
// import vishwa from '../img/vishwa.png';
import ayush from '../img/talks/ayushlodhi.jpeg';
import nills from '../img/talks/nillsfranssens.png';
import anirudh from '../img/talks/anirudh.png';

import sakshi from '../img/talks/sakshi.jpeg';

const talks = () => {
    return (
        <div className="w-100 h-100 blue-bg pt-2" style={{ paddingBottom: '50px' }}>
            <Container style={{ paddingTop: '5rem' }}>
                <Row className="justify-content-center">
                    <h1 style={{ color: '#141414' }}>
                        <b>WORKSHOPS</b>
                    </h1>
                </Row>
                <Row className="justify-content-center">
                    <p
                        className="text-muted "
                        style={{ fontFamily: 'Lato', fontWeight: '400' }}
                    >
                        <b>to learn and discover new skills</b>
                    </p>
                </Row>
            </Container>
            <Container
                className="d-flex justify-content-center align-items-center"
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
						style={{
							visibility: "hidden"
						}}
                    >
                        <Card
                            company={'Microsoft'}
                            topic={'NILLS FRANSSENS'}
                            description={'Kubernetes, Deployment and Scaling.'}
                            image={nills}
                        />
					</Col>
					<Col
                        sm={7}
                        md={4}
                        className="mt-5 d-flex justify-content-center align-items-center"
                    >
                        <Card
                            company={'AWS'}
                            topic={'SAKSHI MALHOTRA'}
                            description={
                                'AWS Lambda, Serverless and Event driven architecture'
                            }
                            image={sakshi}
                        />
                    </Col>
                    <Col
                        sm={7}
                        md={4}
						className="mt-5 d-flex justify-content-center align-items-center"
						style={{
							visibility: "hidden"
						}}
                    >
                        <Card
                            company={'eBay'}
                            topic={'ANIRUDH MURALIDHAR'}
                            description={'Machine Learning and Data Science'}
                            image={anirudh}
                        />
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
