import React from 'react';
import { Container } from 'react-bootstrap';

const Hackathon = () => {
	return (
		<Container fluid className="black-bg white d-flex flex-column justify-content-center align-items-center" style={{paddingTop: "5rem"}}>
			<h1 className="text-center py-5"><b>HACKATHON</b></h1>
			<p className="px-2" style={{maxWidth:"50rem",fontWeight: 400, fontFamily: 'Poppins',color:'#FFFAFF'}}>
			In our signature 36-hour hack, participants propose and implement solutions using emerging technologies such as Machine Learning, Artificial Intelligence, Augmented and Virtual Reality, Blockchain and Fintech or by innovating in various fields such as Defense and Surveillance, Space and Technology, Education Tech and Entertainment Tech. Each team is given the creative freedom to implement their innovative ideas through an application or a prototype.
			</p>
		</Container>
	)
}

export default Hackathon;