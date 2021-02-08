import React from 'react';
import { Container } from 'react-bootstrap';

const Hackathon = () => {
	return (
		<Container fluid className="black-bg white d-flex flex-column justify-content-center align-items-center">
			<h2 className="text-center py-5">HACKATHON</h2>
			<h5 className="text-justify pb-3 px-2" style={{maxWidth:"35rem"}}>
			In our signature 36-hour hack, participants proposed and implemented solutions using emerging technologies such as Machine Learning, Artificial Intelligence, Augmented and Virtual Reality, Blockchain and Fintech or by innovating in various fields such as Defense and Surveillance, Space and Technology, Education Tech and Entertainment Tech. Each team was given the creative freedom to implement their innovative ideas through an application or a prototype.
			</h5>
		</Container>
	)
}

export default Hackathon;