import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import BalsamiqImg from '../../img/pastcollabs/balsamiq-logo-print.png';
import JetbrainsImg from '../../img/pastcollabs/jetbrains.png';
import WolframImg from '../../img/pastcollabs/wolfram_lang.png';
import EchoARImg from '../../img/pastcollabs/echoAr.webp';
import FampayImg from '../../img/pastcollabs/fampay.png';

import { Fade } from 'react-reveal';
import './styles.css';
const ccollabsData = [
    {
        name: 'Balsamiq',
        image: BalsamiqImg,
        link: 'https://balsamiq.com/',
    },
    {
        name: 'Jetbrains',
        image: JetbrainsImg,
        link: 'https://www.jetbrains.com/',
	},
	{
        name: 'Wolfram',
        image: WolframImg,
        link: 'https://www.wolfram.com/',
	},
	{
        name: 'EchoAR',
        image: EchoARImg,
        link: 'https://www.echoar.xyz/',
	},
	{
        name: 'Fampay',
        image: FampayImg,
        link: 'https://www.fampay.in/',
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
const currentcollab = () => {
    return (
        <Container className="py-5" id="sponsors" fluid>
            <Row className="justify-content-center mb-5">
                <h1 className="title">CURRENT COLLABORATORS</h1>
            </Row>
            <Container
                style={{ backgroundColor: 'black' }}
                id="collabimggrid"
                fluid
                className="p-5"
            >
                <Row>{ccollabComp}</Row>
            </Container>
        </Container>
    );
};

export default currentcollab;
