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
            'fsdoi fjopis djfsd jfop asjf pojksad opf ksadpoisadj foisjfi oasjdf jsfjspof dfdaf asedfs fsdasfadf fsdoi fjopis djfsd jfop asjf pojksad fsdoi fjopis djfsd jfop asjf pojksad ',
    },
    {
        title: 'HACKATHON',
        message:
            'fsdoi fjopis djfsd jfop asjf pojksad opf ksadpoisadj foisjfi oasjdf jsfjspof dfdaf asedfs fsdasfadf fsdoi fjopis djfsd jfop asjf pojksad fsdoi fjopis djfsd jfop asjf pojksad ',
    },
    {
        title: 'HACKATHON',
        message:
            'fsdoi fjopis djfsd jfop asjf pojksad opf ksadpoisadj foisjfi oasjdf jsfjspof dfdaf asedfs fsdasfadf fsdoi fjopis djfsd jfop asjf pojksad fsdoi fjopis djfsd jfop asjf pojksad ',
    },
];
export default function About() {
    return (
        <Container fluid className="vw-100" id="about">
            <Row id="parentRow">
                <Col md={6} id="left" className="d-flex align-items-end flex-column justify-content-between mb-md-3 mb-lg-0">
                    {data.map((element, index) => (
                        <Row className="d-flex justify-content-center align-self-end" key={index}>
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
