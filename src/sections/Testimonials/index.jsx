import React from 'react';
import './styles.css';
import { Container, Row } from 'react-bootstrap';
import TestimonialCard from '../../components/TestimonialCard';

const data = [
    {
        testimonial: "CodeSpace was not only one of the very first hackathons that I won , but also the best one I've ever been to so far. Probably the best thing about codespace were the problem statements. They were genuinely challenging and required some serious brainstorming.",
        name: "Shreshth Srivastava",
        designation: "",
    },
    {
        testimonial: "A great opportunity for learning. Amazing workshops and events.Met lots of cool people here. You can do the same.",
        name: "Vinay Lanka",
        designation: "",
    },
    {
        testimonial: "A well organised event, a good opportunity to increase your connections. Informative sessions. One of a kind Hack-a-Thon.",
        name: "Amartya Anshuman",
        designation: "",
    },
]

const Testimonials = () => {
    return (
        <Container fluid className=" p-5 black-bg text-white">
            <Row className="justify-content-center">
                <h1>
                    <b>TESTIMONIALS</b>
                </h1>
            </Row>
            <Row className="justify-content-center pb-5">
                <h5 id="sub"></h5>
            </Row>
            <Row>
                <div className="owl-carousel">
                    {
                        data.map((element, index) => <TestimonialCard key={index} index={index} {...element} />)
                    }
                </div>
            </Row>
        </Container>
    );
};

export default Testimonials;
