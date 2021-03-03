import React from 'react';
import './styles.css';

import badgeImg from '../../img/badge/my-badge.png';
import { Button, Container, Image, Row } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import Pulse from 'react-reveal/Pulse';

const Badge = () => {
    return (
        <Container
            fluid
            className="blue-bg d-flex flex-column justify-content-center align-items-center"
        >
            <Fade bottom>
                <Image src={badgeImg} className="badge-image p-4" />
            </Fade>
            <Row
                className="d-flex justify-content-center align-items-center pb-5 pt-3"
                style={{ position: 'relative' }}
            >
                <Pulse>
                    <Button
                        className="secondary-button get-your-badge-button"
                        href="https://badgedevspace.csivit.com/"
                        target="_blank"
                    >
                        GET YOUR BADGE
                    </Button>
                </Pulse>
            </Row>
        </Container>
    );
};

export default Badge;
