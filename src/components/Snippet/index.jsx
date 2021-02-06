import React from 'react';
import './tinymessage.css'
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const tinymessage = (props) => (
        <Container id="main" className="snippet-conteiner">
            <Row className="justify-content-center">
               <Col  sm={6} lg={8}> <h2 id="title">{props.title}</h2></Col>
            </Row>
            <Row className="justify-content-center">
               <Col sm={6} lg={8}> 
                    <p id="message">
                        {props.message}
                    </p>
                </Col>
            </Row>
        </Container>
)

export default tinymessage;