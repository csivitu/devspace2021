import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import BalsamiqImg from '../../img/pastcollabs/balsamiq-logo-print.png';
import JetbrainsImg from '../../img/pastcollabs/jetbrains.png';
import EchoARImg from '../../img/pastcollabs/echoAr.webp';
import FampayImg from '../../img/pastcollabs/fampay.png';
import GithubImg from '../../img/pastcollabs/github.png';
import SketchImg from '../../img/pastcollabs/sketch.png';
import CodechefImg from '../../img/pastcollabs/codechef.png';

import LinodeImg from '../../img/pastcollabs/linode.png';
import VoiceflowImg from '../../img/pastcollabs/voiceflow.png';
import CodexImg from '../../img/pastcollabs/codex.png';
import AWSImg from '../../img/pastcollabs/aws.png';

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
        name: 'EchoAR',
        image: EchoARImg,
        link: 'https://www.echoar.xyz/',
	},
	{
        name: 'Fampay',
        image: FampayImg,
        link: 'https://www.fampay.in/',
    },
    {
        name: 'Linode',
        image: LinodeImg,
        link: 'https://www.linode.com/',
    },   
    {
        name: 'Codechef',
        image: CodechefImg,
        link: 'https://www.codechef.com/',
    }, 
    {
        name: 'Github',
        image: GithubImg,
        link: 'https://www.github.com/',
    }, 
    {
        name: 'Sketch',
        image: SketchImg,
        link: 'https://www.sketch.com/',
    },
    {
        name: 'Voiceflow',
        image: VoiceflowImg,
        link: 'https://www.voiceflow.com/',
    },
    {
        name: 'Codex',
        image: CodexImg,
        link: 'https://thecodex.me/',
    },
    {
        name: 'AWS',
        image: AWSImg,
        link: 'https://aws.amazon.com/',
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
const Collaborations = () => {
    return (
        <Container className="blue-bg" id="sponsors" fluid style={{paddingTop: "6.5rem"}}>
            <Row className="justify-content-center mb-5">
                <h1 className="title" style={{textAlign:"center"}}>COLLABORATIONS</h1>
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

export default Collaborations;
