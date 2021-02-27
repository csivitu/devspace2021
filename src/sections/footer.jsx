import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import brouchure from '../brouchure/Devspace-2021-Sponsorship-Brochure.pdf';

import { IconContext } from 'react-icons';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <Container
            fluid
            style={{
                backgroundColor: 'black',
                color: 'white',
                padding: '5rem',
            }}
            id="contacts"
        >
            <Row className="justify-content-center py-5">
                <h1>
                    <b>ABOUT US</b>
                </h1>
            </Row>
            <Row className="justify-content-around">
                <Col
                    md={5}
                    className="d-flex justify-content-center align-items-start"
                >
                    <div>
                        <h3 style={{ color: '#00D5FF' }}>
                            <b>COMPUTER SOCIETY OF INDIA</b>
                        </h3>
                        <p>
                            The Computer Society of India is the largest body of
                            non-profit computer professionals in India. We are a
                            group of skilled designers, developers and tech
                            enthusiasts who engage in pushing technology
                            forward. We organise a wide range of workshops,
                            conferences, competitions and non-technical events
                            to facilitate the growth of participants. Visit our
                            website, csivit.com, to see more of who we are and
                            the work we do.
                        </p>
                        <p className="mt-5">
                            <i>
                                <a href="https://csivit.com" className="white" target="_blank">
                                    <u>Visit Website</u>
                                </a>
                            </i>
                        </p>
                    </div>
                </Col>
                <Col md={5} className="d-flex justify-content-center align-items-start">
                    <div>
                        <h3 style={{ color: '#00D5FF' }}>
                            <b>CONTACT US</b>
                        </h3>
                        <p>
                            Email -{' '}
                            <a
                                href="mailto:askcsivit@gmail.com"
                                className="white"
                            >
                                askcsivit@gmail.com
                            </a>
                        </p>
                        <p>
                            Phone -{' '}
                            <a href="tel:+919833576287" className="white">
                                +91 98335 76287
                            </a>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="tel:+919777615319" className="white">
                                +91 97776 15319
                            </a>
                        </p>
                        <h3 style={{ color: '#00D5FF' }} className="pt-3">
                            <b>SOCIAL</b>
                        </h3>
                        <div className="d-inline-flex flex-row justify-content-start">
                            <a
                                style={{ height: '3rem', width: '3rem' }}
                                href="https://www.facebook.com/csivitu"
                            >
                                <IconContext.Provider
                                    value={{
                                        color: '#00D5FF',
                                        size: '1.5em',
                                    }}
                                >
                                    <div>
                                        <FaFacebookSquare />
                                    </div>
                                </IconContext.Provider>
                            </a>
                            <a
                                style={{ height: '3rem', width: '3rem' }}
                                href="https://www.instagram.com/csivitu"
                            >
                                <IconContext.Provider
                                    value={{
                                        color: '#00D5FF',
                                        size: '1.5em',
                                    }}
                                >
                                    <div>
                                        <FaInstagramSquare />
                                    </div>
                                </IconContext.Provider>
                            </a>
                            <a
                                style={{ height: '3rem', width: '3rem' }}
                                href="https://www.twitter.com/csivitu"
                            >
                                <IconContext.Provider
                                    value={{
                                        color: '#00D5FF',
                                        size: '1.5em',
                                    }}
                                >
                                    <div>
                                        <FaTwitterSquare />
                                    </div>
                                </IconContext.Provider>
                            </a>
                        </div>
                        <p className="mt-4">
                            <i>
                                <a href={brouchure} className="white" download>
                                    <u>Download Brochure</u>
                                </a>
                            </i>
                        </p>
                        <p className="mt-4">
                            <i>
                                <a href={brouchure} className="white" download>
                                    <u>Code of Conduct</u>
                                </a>
                            </i>
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
