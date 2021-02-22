import React from 'react';
import { Col, Container, Row, Accordion } from 'react-bootstrap';
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
            <Row className="justify-content-center pb-5">
                <h5 id="sub">Frequently Asked Questions</h5>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center align-items-center first-faq-column">
                    <Accordion>
                        <Example eKey="0">
                            After registering online, you will receive a
                            confirmation email with transaction details from
                            csivit. Please check your inbox or write back to us.
                        </Example>
                        <Example eKey="1">
                            After registering online, you will receive a
                            confirmation email with transaction details from
                            csivit. Please check your inbox or write back to us.
                        </Example>
                        <Example eKey="2">
                            After registering online, you will receive a
                            confirmation email with transaction details from
                            csivit. Please check your inbox or write back to us.
                        </Example>
                    </Accordion>
                </Col>
                {/* <hr style={{
                    height: "25rem",
                    width: "2px",
                    backgroundColor: "#FFFAFF"
                }}/> */}
                <Col className="d-flex justify-content-center align-items-center">
                    <Accordion>
                        <Example eKey="0">
                            After registering online, you will receive a
                            confirmation email with transaction details from
                            csivit. Please check your inbox or write back to us.
                        </Example>
                        <Example eKey="1">
                            After registering online, you will receive a
                            confirmation email with transaction details from
                            csivit. Please check your inbox or write back to us.
                        </Example>
                        <Example eKey="2">
                            After registering online, you will receive a
                            confirmation email with transaction details from
                            csivit. Please check your inbox or write back to us.
                        </Example>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default FAQ;
