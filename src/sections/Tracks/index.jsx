import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import { Row, Col, Image } from 'react-bootstrap';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import 'bootstrap/dist/css/bootstrap.min.css';
import tracklogo from '../../img/track.png';
import trackblue from '../../img/trackblue.png';
const Tracks = () => {
    return (
        <Container className="pt-5 black-bg text-white" fluid>
            <Row className="justify-content-center">
                <h1>
                    <b>TRACKS</b>
                </h1>
            </Row>
            <Row className="justify-content-center">
                <h5 id="sub">to choose from</h5>
            </Row>
            <Container
                className="d-flex justify-content-center align-items-center py-4"
                fluid
            >
                <Row
                    style={{ width: '60rem' }}
                    className="d-flex justify-content-center align-items-center"
                >
                    <Col className="mb-4">
                        <Flippy
                            flipOnHover={true} // default false
                            flipOnClick={false} // default false
                            flipDirection="horizontal" // horizontal or vertical
                        >
                            <FrontSide>
                                <Container
                                    fluid
                                    style={{ height: '16rem', width: '16rem' }}
                                    className="blue-bg d-flex flex-column justify-content-around align-items-center"
                                >
                                    <Image
                                        src={tracklogo}
                                        style={{
                                            height: '10rem',
                                            width: '10rem',
                                        }}
                                    />
                                    <h3 className="white">HEALTHCARE</h3>
                                </Container>
                            </FrontSide>
                            <BackSide>
                                <Container
                                    fluid
                                    style={{ height: '16rem', width: '16rem' }}
                                    className="white-bg d-flex flex-column justify-content-around align-items-center p-2"
                                >
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <Image
                                            src={trackblue}
                                            style={{
                                                height: '2rem',
                                                width: '2rem',
                                            }}
                                            className="mb-2"
                                        />
                                        <h5
                                            className="black"
                                            style={{ margin: 0 }}
                                        >
                                            HEALTHCARE
                                        </h5>
                                        <hr
                                            style={{
                                                width: '12rem',
                                                height: '2px',
                                            }}
                                            className="black-bg"
                                        />
                                    </div>
                                    <div className="black text-center">
                                        <p>
                                            The healthcare sector consists of
                                            businesses that provide medical
                                            services, manufacture medical
                                            equipment.
                                        </p>
                                    </div>
                                </Container>
                            </BackSide>
                        </Flippy>
                    </Col>
                    <Col className="mb-4">
                        <Flippy
                            flipOnHover={true} // default false
                            flipOnClick={false} // default false
                            flipDirection="horizontal" // horizontal or vertical
                        >
                            <FrontSide>
                                <Container
                                    fluid
                                    style={{ height: '16rem', width: '16rem' }}
                                    className="blue-bg d-flex flex-column justify-content-around align-items-center"
                                >
                                    <Image
                                        src={tracklogo}
                                        style={{
                                            height: '10rem',
                                            width: '10rem',
                                        }}
                                    />
                                    <h3 className="white">HEALTHCARE</h3>
                                </Container>
                            </FrontSide>
                            <BackSide>
                                <Container
                                    fluid
                                    style={{ height: '16rem', width: '16rem' }}
                                    className="white-bg d-flex flex-column justify-content-around align-items-center p-2"
                                >
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <Image
                                            src={trackblue}
                                            style={{
                                                height: '2rem',
                                                width: '2rem',
                                            }}
                                            className="mb-2"
                                        />
                                        <h5
                                            className="black"
                                            style={{ margin: 0 }}
                                        >
                                            HEALTHCARE
                                        </h5>
                                        <hr
                                            style={{
                                                width: '12rem',
                                                height: '2px',
                                            }}
                                            className="black-bg"
                                        />
                                    </div>
                                    <div className="black text-center">
                                        <p>
                                            The healthcare sector consists of
                                            businesses that provide medical
                                            services, manufacture medical
                                            equipment.
                                        </p>
                                    </div>
                                </Container>
                            </BackSide>
                        </Flippy>
                    </Col>
                    <Col className="mb-4">
                        <Flippy
                            flipOnHover={true} // default false
                            flipOnClick={false} // default false
                            flipDirection="horizontal" // horizontal or vertical
                        >
                            <FrontSide>
                                <Container
                                    fluid
                                    style={{ height: '16rem', width: '16rem' }}
                                    className="blue-bg d-flex flex-column justify-content-around align-items-center"
                                >
                                    <Image
                                        src={tracklogo}
                                        style={{
                                            height: '10rem',
                                            width: '10rem',
                                        }}
                                    />
                                    <h3 className="white">HEALTHCARE</h3>
                                </Container>
                            </FrontSide>
                            <BackSide>
                                <Container
                                    fluid
                                    style={{ height: '16rem', width: '16rem' }}
                                    className="white-bg d-flex flex-column justify-content-around align-items-center p-2"
                                >
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <Image
                                            src={trackblue}
                                            style={{
                                                height: '2rem',
                                                width: '2rem',
                                            }}
                                            className="mb-2"
                                        />
                                        <h5
                                            className="black"
                                            style={{ margin: 0 }}
                                        >
                                            HEALTHCARE
                                        </h5>
                                        <hr
                                            style={{
                                                width: '12rem',
                                                height: '2px',
                                            }}
                                            className="black-bg"
                                        />
                                    </div>
                                    <div className="black text-center">
                                        <p>
                                            The healthcare sector consists of
                                            businesses that provide medical
                                            services, manufacture medical
                                            equipment.
                                        </p>
                                    </div>
                                </Container>
                            </BackSide>
                        </Flippy>
                    </Col>
                </Row>
            </Container>
            <Container
                className="d-flex justify-content-center align-items-center py-4 pb-5"
                fluid
            >
                <Row
                    style={{ width: '60rem' }}
                    className="d-flex justify-content-center align-items-center"
                >
                    <Col className="mb-4">
                        <Flippy
                            flipOnHover={true} // default false
                            flipOnClick={false} // default false
                            flipDirection="horizontal" // horizontal or vertical
                        >
                            <FrontSide>
                                <Container
                                    fluid
                                    style={{ height: '16rem', width: '16rem' }}
                                    className="blue-bg d-flex flex-column justify-content-around align-items-center"
                                >
                                    <Image
                                        src={tracklogo}
                                        style={{
                                            height: '10rem',
                                            width: '10rem',
                                        }}
                                    />
                                    <h3 className="white">HEALTHCARE</h3>
                                </Container>
                            </FrontSide>
                            <BackSide>
                                <Container
                                    fluid
                                    style={{ height: '16rem', width: '16rem' }}
                                    className="white-bg d-flex flex-column justify-content-around align-items-center p-2"
                                >
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <Image
                                            src={trackblue}
                                            style={{
                                                height: '2rem',
                                                width: '2rem',
                                            }}
                                            className="mb-2"
                                        />
                                        <h5
                                            className="black"
                                            style={{ margin: 0 }}
                                        >
                                            HEALTHCARE
                                        </h5>
                                        <hr
                                            style={{
                                                width: '12rem',
                                                height: '2px',
                                            }}
                                            className="black-bg"
                                        />
                                    </div>
                                    <div className="black text-center">
                                        <p>
                                            The healthcare sector consists of
                                            businesses that provide medical
                                            services, manufacture medical
                                            equipment.
                                        </p>
                                    </div>
                                </Container>
                            </BackSide>
                        </Flippy>
                    </Col>
                    <Col className="mb-4">
                        <Flippy
                            flipOnHover={true} // default false
                            flipOnClick={false} // default false
                            flipDirection="horizontal" // horizontal or vertical
                        >
                            <FrontSide>
                                <Container
                                    fluid
                                    style={{ height: '16rem', width: '16rem' }}
                                    className="blue-bg d-flex flex-column justify-content-around align-items-center"
                                >
                                    <Image
                                        src={tracklogo}
                                        style={{
                                            height: '10rem',
                                            width: '10rem',
                                        }}
                                    />
                                    <h3 className="white">HEALTHCARE</h3>
                                </Container>
                            </FrontSide>
                            <BackSide>
                                <Container
                                    fluid
                                    style={{ height: '16rem', width: '16rem' }}
                                    className="white-bg d-flex flex-column justify-content-around align-items-center p-2"
                                >
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <Image
                                            src={trackblue}
                                            style={{
                                                height: '2rem',
                                                width: '2rem',
                                            }}
                                            className="mb-2"
                                        />
                                        <h5
                                            className="black"
                                            style={{ margin: 0 }}
                                        >
                                            HEALTHCARE
                                        </h5>
                                        <hr
                                            style={{
                                                width: '12rem',
                                                height: '2px',
                                            }}
                                            className="black-bg"
                                        />
                                    </div>
                                    <div className="black text-center">
                                        <p>
                                            The healthcare sector consists of
                                            businesses that provide medical
                                            services, manufacture medical
                                            equipment.
                                        </p>
                                    </div>
                                </Container>
                            </BackSide>
                        </Flippy>
                    </Col>
                    {/* <Col className="mb-4">
                        <Container
                            fluid
                            style={{ height: '16rem', width: '16rem' }}
                            className="blue-bg d-flex flex-column justify-content-around align-items-center"
                        >
                            <Image
                                src={tracklogo}
                                style={{ height: '10rem', width: '10rem' }}
                            />
                            <h3 className="white">HEALTHCARE</h3>
                        </Container>
                    </Col> */}
                </Row>
            </Container>
        </Container>
    );
};

export default Tracks;
