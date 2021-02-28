import React from 'react';
import './styles.css';
import { Container, Image } from 'react-bootstrap';
import timelineLarge from '../../img/timeline/timeline-large.png';
import timelineSmall from '../../img/timeline/timeline-small.png';

const Hackathon = () => {
	return (
		<Container fluid className="black-bg white d-flex flex-column justify-content-center align-items-center" style={{paddingTop: "5rem"}}>
			<h1 className="text-center py-5"><b>TIMELINE</b></h1>
			{/* <p className="px-2" style={{maxWidth:"50rem",fontWeight: 400, fontFamily: 'Poppins',color:'#FFFAFF'}}>
			In our signature 36-hour hack, participants propose and implement solutions using emerging technologies such as Machine Learning, Artificial Intelligence, Augmented and Virtual Reality, Blockchain and Fintech or by innovating in various fields such as Defense and Surveillance, Space and Technology, Education Tech and Entertainment Tech. Each team is given the creative freedom to implement their innovative ideas through an application or a prototype.
			</p> */}
			<Image src={timelineLarge} className="w-100 mt-4 timeline-large" />
			<Image src={timelineSmall} className="my-4 timeline-small" />
		</Container>
	)
}

export default Hackathon;