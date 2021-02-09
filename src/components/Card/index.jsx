import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Profile from '../../img/profile.png';
const index = (props) => {
    return (
        <Card className="mt-5">
                <Card.Img variant="top" src={Profile} className="float-center rounded-circle mx-auto img-fluid" id="profile"/>
                <Card.Body>
                    <Card.Text id="company" className="text-center"><h4>IBM</h4></Card.Text>
                    <Card.Text className="text-center" ><h2>NAME</h2></Card.Text>
                    <hr id="bodyDivider"/>
                    <Card.Text className="text-center">
                        Learn how to use IBM Watson's platform to bring AI tools and apps to your data. 
                    </Card.Text>
                 </Card.Body>
        </Card>
    );
};

export default index;