import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import EFImg from '../../img/pastcollabs/ethereum.png';

import { Fade } from 'react-reveal';
import './styles.css';
const ccollabsData = [
    {
        name: "Ethereum Foundation",
        image: EFImg,
        link: 'https://ethereum.org/en/foundation/',
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
                        className="mx-auto"
                        src={collab.image}
                        alt={collab.name}
                        width="80%"
                        height="80%"
                    />
                </a>
            </Fade>
        </Col>
    );
}
const TitleSponsors = () => {
    return (
        <Container className="blue-bg" id="sponsors" fluid style={{paddingTop: "6.5rem"}}>
            <Row className="justify-content-center mb-5">
                <h1 className="title" style={{textAlign:"center"}}>TITLE SPONSOR 2021</h1>
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

export default TitleSponsors;
