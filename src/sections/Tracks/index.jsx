import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import { Row, Col, Image } from 'react-bootstrap';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import 'bootstrap/dist/css/bootstrap.min.css';

import healthcareFront from '../../img/healthcare-1.png';
import healthcareBack from '../../img/healthcare-2.png';
import educationFront from '../../img/education-1.png';
import educationBack from '../../img/education-2.png';
import defenseFront from '../../img/defense-1.png';
import defenseBack from '../../img/defense-2.png';
import fintechFront from '../../img/fintech-1.png';
import fintechBack from '../../img/fintech-2.png';
import openInnovationFront from '../../img/open-innovation-1.png';
import openInnovationBack from '../../img/open-innovation-2.png';

import Tada from 'react-reveal/Tada';
// import tracklogo from '../../img/track.png';
// import trackblue from '../../img/trackblue.png';

const Tracks = () => {
    return (
        <Container className="black-bg text-white" id="tracks" style={{paddingTop: "5rem"}} fluid>
            <Row className="justify-content-center">
                <h1>
                    <b>TRACKS</b>
                </h1>
            </Row>
            <Row className="justify-content-center">
                <h5 id="sub">to choose from</h5>
            </Row>
            <Container
                className="d-flex justify-content-center align-items-center pt-3"
                fluid
            >
                <Row className="d-flex justify-content-center align-items-center pt-3">
                    <Col className="mb-4">
                        <Flippy
                            flipOnHover={true} // default false
                            flipOnClick={false} // default false
                            flipDirection="horizontal" // horizontal or vertical
                        >
                            <FrontSide>
                                <Tada>
                                    <Container
                                        fluid
                                        style={{
                                            height: '17rem',
                                            width: '16rem',
                                        }}
                                        className="blue-bg d-flex flex-column justify-content-around align-items-center"
                                    >
                                        <Image
                                            src={healthcareFront}
                                            style={{
                                                height: '10rem',
                                                width: '10rem',
                                            }}
                                        />
                                        <h3 className="white text-center">
                                            HEALTHCARE AND SOCIAL RESPONSIBILITY
                                        </h3>
                                    </Container>
                                </Tada>
                            </FrontSide>
                            <BackSide>
                                <Container
                                    fluid
                                    style={{ height: '17rem', width: '16rem' }}
                                    className="white-bg d-flex flex-column justify-content-around align-items-center p-2"
                                >
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <Image
                                            src={healthcareBack}
                                            style={{
                                                height: '2rem',
                                                width: '2rem',
                                            }}
                                            className="mb-2"
                                        />
                                        <h5
                                            className="black text-center"
                                            style={{ margin: 0 }}
                                        >
                                            HEALTHCARE AND SOCIAL RESPONSIBILITY
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
                                            “With great power comes great
                                            responsibility”
                                            <br />- Uncle Ben
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
                                <Tada>
                                    <Container
                                        fluid
                                        style={{
                                            height: '17rem',
                                            width: '16rem',
                                        }}
                                        className="blue-bg d-flex flex-column justify-content-around align-items-center"
                                    >
                                        <Image
                                            src={educationFront}
                                            style={{
                                                height: '10rem',
                                                width: '10rem',
                                            }}
                                        />
                                        <h3 className="white text-center">
                                            EDUCATION TECHNOLOGY
                                        </h3>
                                    </Container>
                                </Tada>
                            </FrontSide>
                            <BackSide>
                                <Container
                                    fluid
                                    style={{ height: '17rem', width: '16rem' }}
                                    className="white-bg d-flex flex-column justify-content-around align-items-center"
                                >
                                    <div className="d-flex flex-column justify-content-center align-items-center p-2">
                                        <Image
                                            src={educationBack}
                                            style={{
                                                height: '2rem',
                                                width: '2rem',
                                            }}
                                            className="mb-2"
                                        />
                                        <h5
                                            className="black text-center"
                                            style={{ margin: 0 }}
                                        >
                                            EDUCATION TECHNOLOGY
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
                                            “Technology will not replace great
                                            teachers but technology in the hands
                                            of great teachers can be
                                            transformational ”
                                            {/* <br />
                                            -George Couros */}
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
                                <Tada>
                                    <Container
                                        fluid
                                        style={{
                                            height: '17rem',
                                            width: '16rem',
                                        }}
                                        className="blue-bg d-flex flex-column justify-content-around align-items-center"
                                    >
                                        <Image
                                            src={defenseFront}
                                            style={{
                                                height: '10rem',
                                                width: '10rem',
                                            }}
                                        />
                                        <h3 className="white text-center">
                                            DEFENSE AND AEROSPACE
                                        </h3>
                                    </Container>
                                </Tada>
                            </FrontSide>
                            <BackSide>
                                <Container
                                    fluid
                                    style={{ height: '17rem', width: '16rem' }}
                                    className="white-bg d-flex flex-column justify-content-around align-items-center p-2"
                                >
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <Image
                                            src={defenseBack}
                                            style={{
                                                height: '2rem',
                                                width: '2rem',
                                            }}
                                            className="mb-2"
                                        />
                                        <h5
                                            className="black text-center"
                                            style={{ margin: 0 }}
                                        >
                                            DEFENSE AND AEROSPACE
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
                                            “Technology is a useful servant but
                                            a dangerous master.” <br />
                                            -Christan Lou Lang
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
                <Row className="d-flex justify-content-center align-items-center">
                    <Col className="mb-4">
                        <Flippy
                            flipOnHover={true} // default false
                            flipOnClick={false} // default false
                            flipDirection="horizontal" // horizontal or vertical
                        >
                            <FrontSide>
                                <Tada>
                                    <Container
                                        fluid
                                        style={{
                                            height: '17rem',
                                            width: '16rem',
                                        }}
                                        className="blue-bg d-flex flex-column justify-content-around align-items-center"
                                    >
                                        <Image
                                            src={fintechFront}
                                            style={{
                                                height: '10rem',
                                                width: '10rem',
                                            }}
                                        />
                                        <h3 className="white text-center">
                                            FINTECH AND CYBERSEC
                                        </h3>
                                    </Container>
                                </Tada>
                            </FrontSide>
                            <BackSide>
                                <Container
                                    fluid
                                    style={{ height: '17rem', width: '16rem' }}
                                    className="white-bg d-flex flex-column justify-content-around align-items-center p-2"
                                >
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <Image
                                            src={fintechBack}
                                            style={{
                                                height: '2rem',
                                                width: '2rem',
                                            }}
                                            className="mb-2"
                                        />
                                        <h5
                                            className="black text-center"
                                            style={{ margin: 0 }}
                                        >
                                            FINTECH AND CYBERSEC
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
                                            “In a world where data is wealth, we
                                            must safeguard ourselves.”
                                            {/* <br />- Subham Panda */}
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
                                <Tada>
                                    <Container
                                        fluid
                                        style={{
                                            height: '17rem',
                                            width: '16rem',
                                        }}
                                        className="blue-bg d-flex flex-column justify-content-around align-items-center"
                                    >
                                        <Image
                                            src={openInnovationFront}
                                            style={{
                                                height: '10rem',
                                                width: '10rem',
                                            }}
                                        />
                                        <h3 className="white text-center">
                                            OPEN INNOVATION
                                        </h3>
                                    </Container>
                                </Tada>
                            </FrontSide>
                            <BackSide>
                                <Container
                                    fluid
                                    style={{ height: '17rem', width: '16rem' }}
                                    className="white-bg d-flex flex-column justify-content-around align-items-center p-2"
                                >
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <Image
                                            src={openInnovationBack}
                                            style={{
                                                height: '2rem',
                                                width: '2rem',
                                            }}
                                            className="mb-2"
                                        />
                                        <h5
                                            className="black text-center"
                                            style={{ margin: 0 }}
                                        >
                                            OPEN INNOVATION
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
                                            “Everybody has a creative potential
                                            and from the moment you can express
                                            this creative potential, you can
                                            start changing the world”
                                            <br />- Paulo Coelho
                                        </p>
                                    </div>
                                </Container>
                            </BackSide>
                        </Flippy>
                    </Col>
                    {/* <Col className="mb-4">
                        <Container
                            fluid
                            style={{ height: '17rem', width: '16rem' }}
                            className="blue-bg d-flex flex-column justify-content-around align-items-center"
                        >
                            <Image
                                src={tracklogo}
                                style={{ height: '10rem', width: '10rem' }}
                            />
                            <h3 className="white text-center">HEALTHCARE AND SOCIAL RESPONSIBILITY</h3>
                        </Container>
                    </Col> */}
                </Row>
            </Container>
        </Container>
    );
};

export default Tracks;
