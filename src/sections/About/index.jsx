import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './styles.css';
import Snippet from '../../components/Snippet';
import caroselitem1 from '../../img/carousel/1.JPG';
import caroselitem2 from '../../img/carousel/2.JPG';
import caroselitem3 from '../../img/carousel/3.JPG';
import caroselitem4 from '../../img/carousel/4.JPG';

import 'bootstrap/dist/css/bootstrap.min.css';
import hack from '../../img/about/hack-1.png';
import talks from '../../img/about/talks-1.png';
import workshop from '../../img/about/workshop-1.png';
const data = [
    {
        title: 'HACKATHON',
        message:
            '36 hours, a team and your ideas. Put your mind to work and use them to solve interesting problems and real world challenges.',
        image: hack
    },
    {
        title: 'TALKS',
        message:
            'Gain insights into applications of the latest technology brought to you by experts who have excelled across diverse fields of work.',
        image: talks
    },
    {
        title: 'WORKSHOPS',
        message:
            'Get access to an interactive, hands on experience to learn about the applications of technology in the real world.',
        image: workshop
    },
];
export default function About() {
    return (
        <Container fluid className="vw-100 blue-bg" id="about">
            <Row id="parentRow">
                <Col
                    md={6}
                    id="left"
                    className="d-flex flex-column justify-content-between mb-md-3 mb-lg-0"
                >
                    {data.map((element, index) => (
                        <Row
                            className="d-flex justify-content-center"
                            style={{ height: '16.5rem' }}
                            key={index}
                        >
                            {/* <Col style={{ marginTop: 16 }}> */}
                            <Snippet
                                title={element.title}
                                message={element.message}
                                image={element.image}
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
                                className="black-img"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                                src={caroselitem2}
                                alt="Previous Devspace event Images"
                                className="black-img"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                                src={caroselitem3}
                                alt="Previous Devspace event Images"
                                className="black-img"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                                src={caroselitem4}
                                alt="Previous Devspace event Images"
                                className="black-img"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}
