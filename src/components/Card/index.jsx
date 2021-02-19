import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Profile from '../../img/profile.png';
const index = (props) => {
    return (
        <Card className="mt-5" style={{ maxWidth: "20rem" }}>
                <Card.Img variant="top" src={Profile} className="float-center rounded-circle mx-auto img-fluid" id="profile"/>
                <Card.Body>
                    <h4 className="text-center" id="company">IBM</h4>
                    <h2 className="text-center">NAME</h2>
                    <hr id="bodyDivider"/>
                    <Card.Text className="text-center">
                        Learn how to use IBM Watson's platform to bring AI tools and apps to your data. 
                    </Card.Text>
                 </Card.Body>
        </Card>
    );
};

export default index;