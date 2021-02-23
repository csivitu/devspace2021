import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
    return (
        <Container fluid style={{backgroundColor: 'black',color: 'white'}}> 
            <Row className="justify-content-center py-5">
                <h1><b>ABOUT US</b></h1>
            </Row>
            <Row className="justify-content-around">
                <Col md={3}>
                    <h3 style={{color: '#00D5FF'}}><b>COMPUTER SOCIETY OF INDIA</b></h3>
                    <p>
                    The Computer Society of India is the largest body of non-profit computer professionals in India. We are a group of skilled designers, developers and tech enthusiasts who engage in pushing technology forward. We organise a wide range of workshops, conferences, competitions and non-technical events to facilitate the growth of participants. Visit our website, csivit.com, to see more of who we are and the work we do.
                    </p>
                </Col>
                <Col md={3}>
                    <h3 style={{color: '#00D5FF'}}><b>CONTACT US</b></h3>
                    <p>Email -</p>
                    <p>Phone -</p>
                    <h3 style={{color: '#00D5FF'}}><b>SOCIAL</b></h3>
                    <div className="d-inline-flex flex-row justify-content-start">
                        <a href="https://www.facebook.com/csivitu"><img src="http://static.csivit.com/images/ccs/facebook.svg" width="45%"  height="45%" style={{fill:"white"}} alt="Facebook"/></a>
                        <a href="https://www.instagram.com/csivitu"><img src="http://static.csivit.com/images/ccs/insta.svg" width="45%"  height="45%" alt="Instagram"/></a>
                        <a href="https://www.twitter.com/csivitu"><img src="http://static.csivit.com/images/ccs/twitter.svg" width="45%"  height="45%" alt="Twitter"/></a>
                    </div>
                    <p className="mt-4"><i><u>Download Brochure</u></i></p>
                    <p><i><u>View Code of Conduct</u></i></p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;