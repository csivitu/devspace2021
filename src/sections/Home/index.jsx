import React from 'react';
import {
    Row,
    Container,
    Image,
    Button
} from 'react-bootstrap';
import Devspacejumbo from '../../img/DevspaceJumbotron.svg';
import './styles.css';
import herovideo from '../../img/hero/hero.mp4';
import heroimg from '../../img/hero/herobw.jpg';

function home(props) {
    return (
        <Container
            className="home-section vh-100 vw-100 white"
            fluid
            style={{ position: 'relative', overflow: "hidden" }}
        >
            <div className="bg-overlay">

            </div>
            <div className="bg-image">
                <img src={heroimg} alt="BGIMAGE"/>
            </div>
            <div className="bg-video">
                <video className="bg-video-content" autoPlay muted>
                    <source src={herovideo} type="video/mp4" />
                    Your Browser is not supported!!
                </video>
            </div>
            <Container
                fluid
                className="d-flex flex-column justify-content-center align-items-center w-100 h-100"
            >
                <Row className="justify-content-center mt-5">
                    <Image
                        src={Devspacejumbo}
                        alt="Devspace"
                        className="mw-75 devspace-logo"
                        fluid
                    />
                </Row>
                <Row className="justify-content-center mt-3">
                    <h2 className="tags">
                        Hackathon &nbsp; |
                        &nbsp; Workshop
                        &nbsp;&nbsp;| &nbsp;&nbsp; Talks
                    </h2>
                </Row>
                {/* <Row className="justify-content-center text-center mt-5">
                    <h4 className="px-3">
                        Devspace 2021 presents
                        <br />
                        Hacks, talks and workshops. <br /> Learn from the
                        finest, compete with the brightest.
                    </h4>
                </Row> */}
                <Row className="text-center mt-5" style={{ zIndex: 10 }}>
                    <Button id="registerbutton" className="primary-button">
                        REGISTER
                    </Button>
                </Row>
            </Container>
        </Container>
    );
}

export default home;
