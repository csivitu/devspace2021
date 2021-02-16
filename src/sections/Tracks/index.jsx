import React from 'react';
import './style.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css'
const Tracks = () => {
    return (
        <Container className="pt-5 black-bg text-white" fluid>
            <Row className="justify-content-center">
                <h1><b>TRACKS</b></h1>
            </Row>
            <Row className="justify-content-center">
                <h5 id="sub">to choose from</h5>
            </Row>
            <Row>

            </Row>
        </Container>
    );
};

export default Tracks;