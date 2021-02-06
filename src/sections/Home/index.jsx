import React from 'react';
import {Row, Container,Col} from 'react-bootstrap'
import Devspacejumbo from '../../img/DevspaceJumbotron.svg';
import JumboBg from '../../img/home-jumbotron-bg.png';
import './styles.css'

function home(props) {
    return (
        <div style={{color:'white'}} className="home-section vh-100 vw-100">
            <img src={JumboBg} id="jumbobg"/>
            <Container fluid className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
                <Row className="justify-content-center">
                    <img src={Devspacejumbo} alt ="Devspace" style={{zIndex: 10}}/>
                </Row>
                <Row className="justify-content-center" style={{zIndex: 10}}>
                     <h2>Hackathon &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; Workshop &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp; Talks</h2>
                </Row>
                <Row className="justify-content-center text-center">
                    <Col sm={6}>
                        <h4>Devspace 2018 was South India's largest student developers' conference with a lorem ipsum hack footfall of 800 participants.</h4>
                    </Col>
                </Row>
                <Row className="text-center" style={{zIndex: 10}}>
                    <button>REGISTER</button>
                </Row>
            </Container>
        </div>
    );
}

export default home;