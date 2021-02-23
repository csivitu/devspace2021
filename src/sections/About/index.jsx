import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './styles.css';
import Snippet from '../../components/Snippet';
import caroselitem1 from '../../img/home-jumbotron-bg.png';
import 'bootstrap/dist/css/bootstrap.min.css';
const data = [
    {
        title: 'HACKATHON',
        message:
            '36 hours, a team and your ideas. Put your mind to work and use them to solve interesting problems and real world challenges.',
    },
    {
        title: 'TALKS',
        message:
            'Gain insights into applications of the latest technology brought to you by experts who have excelled across diverse fields of work.',
    },
    {
        title: 'WORKSHOPS',
        message:
            'Get access to an interactive, hands on experience to learn about the applications of technology in the real world.',
    },
];
export default function About() {
    return (
        <Container fluid className="vw-100" id="about">
            <Row id="parentRow">
                <Col md={6} id="left" className="d-flex flex-column justify-content-between mb-md-3 mb-lg-0">
                    {data.map((element, index) => (
                        <Row className="d-flex justify-content-center" style={{height:"15rem"}} key={index}>
                            {/* <Col style={{ marginTop: 16 }}> */}
                                <Snippet
                                    title={element.title}
                                    message={element.message}
                                />
                            {/* </Col> */}
                        </Row>
                    ))}
                </Col>
                <Col md={6} id="right">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                src={caroselitem1}
                                alt="Previous Devspace event Images"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={caroselitem1}
                                alt="Previous Devspace event Images"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}
