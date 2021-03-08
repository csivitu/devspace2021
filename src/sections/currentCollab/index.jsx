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
import IWTMAImg from '../../img/pastcollabs/IWTMA.jpg';
import EFImg from '../../img/pastcollabs/ethereum.png';
import GocImg from '../../img/pastcollabs/gocomet.png';
import OSImg from '../../img/pastcollabs/outscal.png';
import GithubImg from '../../img/pastcollabs/github.png';
import SketchImg from '../../img/pastcollabs/sketch.png';
import VTImg from '../../img/pastcollabs/vitrendz.png';
import CodechefImg from '../../img/pastcollabs/codechef.png';
import DyteImg from '../../img/pastcollabs/dyte.png';
import LinodeImg from '../../img/pastcollabs/linode.png';
import VoiceflowImg from '../../img/pastcollabs/voiceflow.png';
import CodexImg from '../../img/pastcollabs/codex.png';
import AWSImg from '../../img/pastcollabs/aws.png';

import { Fade } from 'react-reveal';
import './styles.css';
const ccollabsData = [
    {
        name: "Ethereum Foundation",
        image: EFImg,
        link: 'https://ethereum.org/en/foundation/',
    },
    {
        name: "Gocomet",
        image: GocImg,
        link: 'https://www.gocomet.com',
    },
    {
        name: "Outscal",
        image: OSImg,
        link: 'https://www.outscal.com',
    },
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
    {
        name: 'Indian Wind Turbine Manufacturers Association',
        image: IWTMAImg,
        link: 'https://www.indianwindpower.com/',
    },
    {
        name: 'Dyte',
        image: DyteImg,
        link: 'https://dyte.in/',
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
    // {
    //     name: 'VITrendz',
    //     image: VTImg,
    //     link: 'https://www.vitrendz.tech/',
    // }, 
    
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
        <Container className="blue-bg" id="sponsors" fluid style={{paddingTop: "5rem"}}>
            <Row className="justify-content-center mb-5">
                <h1 className="title" style={{textAlign:"center"}}>CURRENT COLLABORATORS</h1>
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
