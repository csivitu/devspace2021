import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import DevfolioImg from '../../img/pastcollabs/Devfolio-White.png';
import MaticImg from '../../img/pastcollabs/matic.png';
import PSFImg from '../../img/pastcollabs/psf.png';
import DOceanImg from '../../img/pastcollabs/DigitalOcean.png';
import CosmosImg from '../../img/pastcollabs/cosmos.png';
import PersistenceImg from '../../img/pastcollabs/persistence.png';
import FoldImg from '../../img/pastcollabs/fold.png';
import BalsamiqImg from '../../img/pastcollabs/balsamiq-logo-print.png';
import CoworkableImg from '../../img/pastcollabs/Coworkable_logo_black.png';
import CTimImg from '../../img/pastcollabs/creative-tim-transparent-bg.png';
import JetbrainsImg from '../../img/pastcollabs/jetbrains.png';
import DotTechImg from '../../img/pastcollabs/White-Powered-By-Tech.png';
import TaskadeImg from '../../img/pastcollabs/taskade.png';
import RestdbioImg from '../../img/pastcollabs/restdb-logo-white.png';
import BugseeImg from '../../img/pastcollabs/Bugsee-Logo.svg';
import WolframImg from '../../img/pastcollabs/wolfram_lang.png';
import CloudsploitImg from '../../img/pastcollabs/cloudsploit.png';
import RoesenfeldImg from '../../img/pastcollabs/rosenfeld.png';
import IWTMAImg from '../../img/pastcollabs/IWTMA.jpg';
import AlexaImg from '../../img/pastcollabs/amazon_alexa.png';
import CodingBImg from '../../img/pastcollabs/coding-blocks.png';
import GithubImg from '../../img/pastcollabs/github.png';
import IBMImg from '../../img/pastcollabs/ibm.png';
import SketchImg from '../../img/pastcollabs/sketch.png';
import { Fade } from 'react-reveal';
import './style.css';
const pcollabsData = [
    {
        name: 'Devfolio',
        image: DevfolioImg,
        link: 'https://devfolio.co/',
    },
    {
        name: 'Matic',
        image: MaticImg,
        link: 'https://matic.network/',
    },
    {
        name: 'Python Software Foundation',
        image: PSFImg,
        link: 'https://www.python.org/psf/',
    },
    {
        name: 'Digital Ocean',
        image: DOceanImg,
        link: 'https://www.digitalocean.com/',
    },
    {
        name: 'Cosmos',
        image: CosmosImg,
        link: '',
    },
    {
        name: 'Persistence',
        image: PersistenceImg,
        link: 'https://persistence.one',
    },
    {
        name: 'Fold',
        image: FoldImg,
        link: 'https://fold.money',
    },
    {
        name: 'Balsamiq',
        image: BalsamiqImg,
        link: 'https://balsamiq.com/',
    },
    {
        name: 'Coworkable',
        image: CoworkableImg,
        link: 'https://www.coworkable.com/',
    },
    {
        name: 'Creative Tim',
        image: CTimImg,
        link: 'https://www.creative-tim.com/',
    },
    {
        name: 'Jetbrains',
        image: JetbrainsImg,
        link: 'https://www.jetbrains.com/',
    },
    {
        name: '.tech',
        image: DotTechImg,
        link: 'https://get.tech/',
    },
    {
        name: 'taskade',
        image: TaskadeImg,
        link: 'https://www.taskade.com/',
    },
    {
        name: 'restdbio',
        image: RestdbioImg,
        link: 'https://restdb.io/',
    },
    {
        name: 'Bugsee',
        image: BugseeImg,
        link: 'https://www.bugsee.com/',
    },
    {
        name: 'Wolfram',
        image: WolframImg,
        link: 'https://www.wolfram.com/',
    },
    {
        name: 'Cloudsploit',
        image: CloudsploitImg,
        link: 'https://cloudsploit.com/',
    },
    {
        name: 'Roesenfeld',
        image: RoesenfeldImg,
        link: 'https://rosenfeldmedia.com/',
    },
    {
        name: 'Indian Wind Turbine Manufacturers Association',
        image: IWTMAImg,
        link: 'https://www.indianwindpower.com/',
    },
    {
        name: 'Amazon Alexa',
        image: AlexaImg,
        link: 'https://developer.amazon.com/en-IN/alexa',
    },
    {
        name: 'Coding Blocks',
        image: CodingBImg,
        link: 'https://codingblocks.com/',
    },
    {
        name: 'Github',
        image: GithubImg,
        link: 'https://github.com/',
    },
    {
        name: 'IBM',
        image: IBMImg,
        link: 'https://www.ibm.com/',
    },
    {
        name: 'Sketch',
        image: SketchImg,
        link: 'https://www.sketchapp.com/',
    },
];
var pcollabComp = [];
for (const collab of pcollabsData) {
    pcollabComp.push(
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
const pastcollab = () => {
    return (
        <Container className=" pb-5 blue-bg" fluid style={{paddingTop: "5rem"}}>
            <Row className="justify-content-center mb-5">
                <h1 className="title">PAST COLLABORATORS</h1>
            </Row>
            <Container
                style={{ backgroundColor: 'black' }}
                id="collabimggrid"
                fluid
                className="p-5"
            >
                <Row>{pcollabComp}</Row>
            </Container>
        </Container>
    );
};

export default pastcollab;
