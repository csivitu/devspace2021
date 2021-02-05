import React from 'react';
import './css/tinymessage.css'
import '../fontsizes.css'
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const tinymessage = (props) => {
    console.log(props.title+" "+ props.message)
    return (
        <Container id="main" className="snippet-conteiner">
            <Row className="justify-content-center">
               <Col sm={8}> <h3 id="title">{props.title}</h3></Col>
            </Row>
            <Row className="justify-content-center">
               <Col sm={8}> 
                    <p id="message">
                        {props.message}
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default tinymessage;