import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import OSImg from '../../img/pastcollabs/outscal.png';
import GirlscriptImg from '../../img/pastcollabs/girlscript-12.jpeg';
import GsyayImg from '../../img/pastcollabs/gsyay.png';
import './styles.css';

import { Fade } from 'react-reveal';
const ccollabsData = [
    {
        name: "Outscal",
        image: OSImg,
        link: 'https://www.outscal.com',
    },
    {
        name: "Girlscipt",
        image: GirlscriptImg,
        link: 'https://www.girlscript.tech/',
    },
    {
        name: "GS YAY",
        image: GsyayImg,
        link: 'https://www.gsyay.com/',
    },
];
var ccollabComp = [];
for (const collab of ccollabsData) {
    ccollabComp.push(
        <Col
            key={collab.name}
            className="d-flex justify-content-center align-items-center p-3"
            xs={6}
            md={3}
        >
            <Fade bottom>
                <a target="_blank" href={collab.link} rel="noreferrer">
                    <img
                        className={`mx-auto ocp-img ${collab.name}`}
                        src={collab.image}
                        alt={collab.name}
                    />
                </a>
            </Fade>
        </Col>
    );
}
const OnlineLearningPartners = () => {
    return (
        <Container className="blue-bg" id="sponsors" fluid style={{paddingTop: "6.5rem"}}>
            <Row className="justify-content-center mb-5">
                <h1 className="title" style={{textAlign:"center"}}>ONLINE LEARNING PARTNER</h1>
            </Row>
            <Container
                style={{ backgroundColor: 'black' }}
                id="collabimggrid"
                fluid
                className="p-5"
            >
                <Row className="justify-content-center align-items-center">{ccollabComp}</Row>
            </Container>
        </Container>
    );
};

export default OnlineLearningPartners;
