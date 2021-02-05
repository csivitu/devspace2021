import React from 'react';
import {Row, Container} from 'react-bootstrap'
import Devspacejumbo from '../../img/DevspaceJumbotron.svg';
import './styles.css'

function home(props) {
    return (
        <div style={{backgroundColor: 'black',color:'white'}} className="home-section vh-100 vw-100">
            <Container fluid className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
                <Row className="justify-content-center">
                    <img src={Devspacejumbo} alt ="Devspace"/>
                </Row>
                <Row className="justify-content-center">
                     <h3>21<sup>st</sup> February, 2021</h3>
                </Row>
            </Container>
        </div>
    );
}

export default home;