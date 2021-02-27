import React from 'react';
import { Col, Container, Row, Accordion } from 'react-bootstrap';
import Example from '../../components/FAQqs';
import './styles.css';

const faqs1 = [
    {
        qs: 'Who is eligible to participate in the hackathon?',
        ans: 'Students enrolled in any university from all over the globe are eligible to participate in Devspace 2021.',
    },
    {
        qs: 'Is there a registration fee?',
        ans: 'No. Devspace 2021 is completely free of cost.',
    },
    {
        qs: 'Is the event online or offline?',
        ans: 'Your health is our priority. Keeping that in mind, Devspace 2021 is going to be an online event.',
    },
];

const faqs2 = [
    {
        qs: 'Can I apply without a team?',
        ans: 'No. Devspace 2021 is a team event. Student teams need a minimum of three fellow students as members but a maximum of six.  ',
    },
    {
        qs: 'Do I need to know how to code and/or have a technical skill to participate?',
        ans: 'No. Your problem-solving ability is independent of your technical skills. However, if you’d like to increase your knowledge on existing technologies, they will be available through workshops during the hackathon. ',
    },
    {
        qs: 'How long is the hackathon?',
        ans: 'Devspace 2021 is going to last for 36 hours. It’ll also be filled with talks, workshops and 5 thrilling tracks to brainstorm and work on.',
    },
];

const FAQ = () => {
    return (
        <Container fluid className=" p-5 black-bg text-white faq-main-container">
            <Row className="justify-content-center">
                <h1>
                    <b>FAQ</b>
                </h1>
            </Row>
            <Row className="justify-content-center pb-5">
                <h5 id="sub">Frequently Asked Questions</h5>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center align-items-start first-faq-column">
                    <Accordion>
                        {faqs1.map((faq, index) => (
                            <Example eKey={index+1} qs={faq.qs} ans={faq.ans} />
                        ))}
                    </Accordion>
                </Col>
                {/* <hr style={{
                    height: "25rem",
                    width: "2px",
                    backgroundColor: "#FFFAFF"
                }}/> */}
                <Col className="d-flex justify-content-center align-items-start">
                    <Accordion>
                        {faqs2.map((faq, index) => (
                            <Example eKey={index+1} qs={faq.qs} ans={faq.ans} />
                        ))}
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default FAQ;
