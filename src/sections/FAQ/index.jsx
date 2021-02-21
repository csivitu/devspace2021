import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Example from '../../components/FAQqs';
import './styles.css';

const FAQ = () => {
    return (
        <Container fluid className=" p-5 black-bg text-white">
            <Row className="justify-content-center">
                <h1>
                    <b>FAQ</b>
                </h1>
            </Row>
            <Row className="justify-content-center">
                <h5 id="sub">Frequently Asked Questions</h5>
            </Row>
            <Row>
                <Col>
                    <Example>
                        After registering online, you will receive a
                        confirmation email with transaction details from csivit.
                        Please check your inbox or write back to us.
                    </Example>
                    <Example>
                        After registering online, you will receive a
                        confirmation email with transaction details from csivit.
                        Please check your inbox or write back to us.
                    </Example>
                    <Example>
                        After registering online, you will receive a
                        confirmation email with transaction details from csivit.
                        Please check your inbox or write back to us.
                    </Example>
                </Col>
                <Col>
                    <Example>
                        After registering online, you will receive a
                        confirmation email with transaction details from csivit.
                        Please check your inbox or write back to us.
                    </Example>
                    <Example>
                        After registering online, you will receive a
                        confirmation email with transaction details from csivit.
                        Please check your inbox or write back to us.
                    </Example>
                    <Example>
                        After registering online, you will receive a
                        confirmation email with transaction details from csivit.
                        Please check your inbox or write back to us.
                    </Example>
                </Col>
            </Row>
        </Container>
    );
};

export default FAQ;
