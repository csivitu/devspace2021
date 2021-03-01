import React from 'react';
import './styles.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import { Fade } from 'react-reveal';
import 'bootstrap/dist/css/bootstrap.min.css';
const tinymessage = (props) => (
    // <Fade left>
    <Container id="main" className="px-5 mt-4 mx-4 snippet-main d-flex justify-content-start align-items-center">
        <div>
            <Row className="justify-content-left">
                <Col sm={8}>
                    {' '}
                    <h2 id="title" style={{ fontWeight: 900 }}>
                        {props.title}
                    </h2>
                </Col>
            </Row>
            <Row className="justify-content-left">
                <Col sm={8}>
                    <p id="message">{props.message}</p>
                </Col>
            </Row>
        </div>
        <Image src={props.image} className="snippet-image" />
    </Container>
    // </Fade>
);

export default tinymessage;
