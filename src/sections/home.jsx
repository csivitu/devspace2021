import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Devspacejumbo from '../img/DevspaceJumbotron.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/home.css'

function home(props) {
    return (
        <div style={{backgroundColor: 'black',color:'white'}}>
            <Container>
                <Row>
                    <Col>
                        <img src={Devspacejumbo} alt ="Devspace"/>
                    </Col>
                </Row>
                <Row className="">
                <Col classname="text-center">
                    <h3>21<sup>st</sup> February, 2021</h3>
                </Col>
                </Row>
            </Container>
        </div>
    );
}

export default home;