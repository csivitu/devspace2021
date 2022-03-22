import React from 'react';
import { Container, Image } from 'react-bootstrap';
import './styles.css';
import hackathonImg from '../../img/about/hack-1.png';

const Hackathon = () => {
    return (
        <Container
            fluid
            className="black-bg white d-flex flex-column justify-content-center align-items-center"
            style={{ paddingTop: '5rem'}}
        >
            <h1 className="text-center py-5">
                <b>HACKATHON 2021</b>
            </h1>
            <div className="hackathon-text p-5" style={{position: "relative"}}>
                <p
                    className="px-2 black"
                    style={{
                        maxWidth: '43rem',
                        fontWeight: 400,
                        fontFamily: 'Poppins',
                        color: '#FFFAFF',
                        zIndex: 1000,
                        position: "relative",
                    }}
                >
                    In our signature 36-hour hack, participants propose and
                    implement solutions using emerging technologies such as
                    Machine Learning, Artificial Intelligence, Augmented and
                    Virtual Reality, Blockchain and Fintech or by innovating in
                    various fields such as Defense and Surveillance, Space and
                    Technology, Education Tech and Entertainment Tech. Each team
                    is given the creative freedom to implement their innovative
                    ideas through an application or a prototype.
                </p>
                <Image src={hackathonImg} className="hack-image" />
            </div>
            
        </Container>
    );
};

export default Hackathon;
