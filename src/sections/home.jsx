import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Devspacejumbo from '../img/DevspaceJumbotron.svg'
import '../fontsizes.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/home.css'

function home(props) {
    return (
        <Jumbotron style={{}} className="h-100" fluid>
            <Container>
                <Row className="justify-content-center" style={{height: '40%'}}>
                    <Col className="text-center">
                        <img src={Devspacejumbo} 
                             alt ="Devspace"
                             width="70%"
                             height="70%" />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                <Col>
                    <h3 className="text-center">21<sup>st</sup> February, 2021</h3>
                </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col>
                        <h4 className="text-center">Hackathon | Workshops | Talks</h4>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg={6}>
                        <h6 className="text-center karla">
                            Devspace 2018 was South India's largest student developers' conference with a lorem ipsum hack foofall of 800 participants
                        </h6>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <button>Register</button>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default home;